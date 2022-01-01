grammar pgn;

@members {
    this.tags = {};
    this.moves = [];
}


/////////////////////////////////////////////////////////
/// PGN tags
/////////////////////////////////////////////////////////


string returns [txt]:
    { let arr = []; }
    '"'
    (
        c=~('"')
        { arr.append($c.text); }
    )*
    '"'
    { $txt = arr.join(''); }
;


comment returns [txt]:
    { let arr = []; }
    '{'
    (
        c=~('}')
        { arr.push($c.text); }
    )*
    '}'
    { $txt = arr.join(''); }
;


tag:
    {
        let arr = [];
        let key = '';
    }
    '['
    (
        a=~(WS)
        { arr.push($a.text); }
    )+
    WS*?
    s=string
    {
        key = arr.join('');
        this.tags[key] = $s.text.substring(1, $s.text.length-1);
    }
    ']'
;


/////////////////////////////////////////////////////////
/// PGN chess
/////////////////////////////////////////////////////////

square returns [txt]:
    f=FILE r=RANK
    { $txt = $f.text + $r.text }
;


piece returns [txt]:
    p=PIECE x=(FILE|RANK)?
    {
        $txt = $p.text;
        if ($x != undefined)
            $txt += $x.text;
    }
;


halfMove returns [props]:
    {
        $props = {
            'move': undefined,
            'glyph': undefined,
            'comment': undefined,
        };
    }
    (
        // pawn moves
        s=square
        { $props['move'] = $s.txt; }
        |
        // pawn takes
        f=FILE 'x' s=square
        { $props['move'] = $f.text + 'x' + $s.txt; }
        |
        // piece takes
        p=piece 'x' s=square
        { $props['move'] = $p.txt + 'x' + $s.txt; }
        |
        // piece moves
        p=piece s=square
        { $props['move'] = $p.txt + $s.txt; }
        |
        // pawn promotes
        s=square '=' p=piece
        { $props['move'] = $s.txt + '=' + $p.txt; }
        |
        // castles
        x=('O-O'|'O-O-O')
        { $props['move'] = $x.text; }
    )
    g=GLYPH?
    { $props['glyph'] = ($g == undefined)? undefined : $g.text }
    WS*?
    (
        c=comment
        { $props['comment'] = $c.txt; }
    )?
;


fullMove:
    { let move = []; }
    (INT|RANK) '.' WS*?
    (
        h1=halfMove
        { move.push($h1.props); }
        (
            WS+
            h2=halfMove
            { move.push($h2.props); }
        )?
        {
            if (move.length < 2)
                move.push({
                    'move': undefined,
                    'glyph': undefined,
                    'comment': undefined,
                });
        }
        |
        '.'+ WS*? h=halfMove
        {
            move.append({
                'move': undefined,
                'glyph': undefined,
                'comment': undefined,
            });
            move.push($h.props);
        }
    )
    { this.moves.push(move); }
;


game:
    (tag|WS)*? (fullMove|WS)*? RESULT?
;


////////////////////////////////////////////////
/// Lexer rules
////////////////////////////////////////////////

FILE: [a-h];
RANK: [1-8];
PIECE: ('K' | 'Q' | 'R' | 'B' | 'N');
GLYPH: ('!' | '?' | '#' | '+')+;
RESULT: ('1-0' | '0-1' | '1/2-1/2');

INT: [0-9]+;
CHAR: [a-zA-Z];

WS: [ \n\r\t];
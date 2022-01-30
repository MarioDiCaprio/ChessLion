package com.mariodicaprio.chesslion.user;

import com.mariodicaprio.chesslion.database.DatabaseManager;
import com.mariodicaprio.chesslion.database.tables.LionPlayer;

import java.util.List;

public class PublicUserInfo {

    private final String username;
    private final String realName;

    public PublicUserInfo(String username) {
        var tmp = new Object() {
            public String realName = null;
        };

        DatabaseManager.simpleSessionWithTransaction(s -> {
            @SuppressWarnings("unchecked")
            List<LionPlayer> users =
                (List<LionPlayer>)
                s.createQuery(
                    "FROM LionPlayer " +
                    "WHERE username='" + username + "'"
                )
                .getResultList();
            if (users.size() > 0) {
                LionPlayer p = users.get(0);
                tmp.realName = p.getUserData().getRealName();
            }
        });

        this.username = username;
        this.realName = tmp.realName;
    }

    public String getUsername() {
        return username;
    }

    public String getRealName() {
        return realName;
    }

}

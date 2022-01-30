package com.mariodicaprio.chesslion.user;

import com.mariodicaprio.chesslion.Settings;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class PublicUserInfoController {

    @CrossOrigin(Settings.CLIENT_ADDRESS)
    @GetMapping("/publicUserInfo")
    public PublicUserInfo getPublicUserInfo(@RequestParam(name="username") String username) {
        return new PublicUserInfo(username);
    }
    
}

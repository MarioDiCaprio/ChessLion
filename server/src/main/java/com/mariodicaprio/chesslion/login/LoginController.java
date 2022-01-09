package com.mariodicaprio.chesslion.login;


import com.mariodicaprio.chesslion.Settings;
import org.springframework.web.bind.annotation.*;


/**
 * This class is a {@link RestController} for the '/login' REST endpoint.
 * It manages an attempted login session to this website, which is handled
 * by the 'login' method.
 * @see Login
 */
@RestController
public class LoginController {

    /**
     * This method manages access to the '/login' REST endpoint. It accepts
     * a username and a password and returns the corresponding {@link Login}
     * object that represents the access to the endpoint. Only requests
     * by this website's client site are accepted.
     * @param username The username to log in with
     * @param password The password to log in with
     * @return The {@link Login} object that represents the login session
     */
    @CrossOrigin(Settings.CLIENT_ADDRESS)
    @GetMapping("/login")
    public Login login(
            @RequestParam(name="username") String username,
            @RequestParam(name="password") String password
            ) {
        return new Login(username, password);
    }

}

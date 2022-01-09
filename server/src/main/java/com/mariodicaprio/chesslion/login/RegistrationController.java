package com.mariodicaprio.chesslion.login;


import com.mariodicaprio.chesslion.Settings;
import org.springframework.web.bind.annotation.*;


/**
 * This class is a {@link RestController} for the '/registration' REST endpoint.
 * It manages an attempted registration session to this website, which is handled
 * by the 'registration' method.
 * @see Registration
 */
@RestController
public class RegistrationController {

    /**
     * This method manages access to the '/registration' REST endpoint. It accepts
     * a username, an email and a password and returns the corresponding {@link Registration}
     * object that represents the access to the endpoint. Only requests
     * by this website's client site are accepted.
     * @param username The username to register
     * @param email The password to register
     * @param password The password to register
     * @return The {@link Login} object that represents the registration session
     */
    @CrossOrigin(Settings.CLIENT_ADDRESS)
    @GetMapping("/registration")
    public Registration registration(
            @RequestParam(name="username") String username,
            @RequestParam(name="email") String email,
            @RequestParam(name="password") String password
            ) {
        return new Registration(username, email, password);
    }

}

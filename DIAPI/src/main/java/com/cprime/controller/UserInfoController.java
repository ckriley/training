package com.cprime.controller;

import org.slf4j.Logger;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

/**
 * Created by criley on 11/8/16.
 */
@RestController
public class UserInfoController {

    private final Logger logger = org.slf4j.LoggerFactory.getLogger(this.getClass());

    @RequestMapping(value = "/v1/di/userInfo/{userId}", method = RequestMethod.GET)
    public ResponseEntity getMessages(HttpSession session) {
        logger.info("In method userInfo");

        ResponseEntity.BodyBuilder builder = (ResponseEntity.BodyBuilder)ResponseEntity.ok();
        builder.header("Access-Control-Allow-Origin","*");
        //builder.allow(HttpMethod.POST);
        builder.contentType(MediaType.APPLICATION_JSON);
        return builder.body("[{\"userID\":\"string\",\"userName\":\"string\"}]");

    }

}

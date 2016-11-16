package com.cprime.controller;

import org.slf4j.Logger;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

/**
 * Created by criley on 11/7/16.
 */
@RestController
public class BroadCastMessageController {

    private final Logger logger = org.slf4j.LoggerFactory.getLogger(this.getClass());

    @RequestMapping(value = "/v1/di/broadCastMessage/{userId}/{abaNumber}/{messageAge}", method = RequestMethod.GET)
    public ResponseEntity getMessages(HttpSession session) {
        logger.info("In method getMessages");

        ResponseEntity.BodyBuilder builder = (ResponseEntity.BodyBuilder)ResponseEntity.ok();
        builder.header("Access-Control-Allow-Origin","*");
        builder.contentType(MediaType.APPLICATION_JSON);
        return builder.body("[\n" +
                "\t{\"titleText\":\"Deposit Difference Notification\",\n" +
                "\t \"messageText1\":\"On 21-OCT-16, your institution was charged for one or more differences discovered in your cash deposit(s). [Broadcast Date: 12-AUG-16]\",\n" +
                "\t \"messgaeText2\":null,\"anchorText\":null,\"linkUrl\":null},\n" +
                "\t{\"titleText\":\"Deposit Difference Notification\",\n" +
                "\t \"messageText1\":\"On 20-OCT-16, your institution was charged for one or more differences discovered in your cash deposit(s). [Broadcast Date: 12-AUG-16]\",\n" +
                "\t \"messgaeText2\":null,\"anchorText\":null,\"linkUrl\":null}\n" +
                "]");

    }

}

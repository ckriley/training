package com.cprime.controller;

import org.slf4j.Logger;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Map;

/**
 * Created by criley on 11/4/16.
 */
@RestController
public class CashOrderController {

    private final Logger logger = org.slf4j.LoggerFactory.getLogger(this.getClass());

    @RequestMapping(value = "/v1/di/cashOrder", method = RequestMethod.OPTIONS)
    @ResponseStatus(value = HttpStatus.OK)
    public ResponseEntity getOptions(HttpSession session) {
        logger.info("In method getAllVendors");
        HttpHeaders headers = new HttpHeaders();
        headers.add("Allow","POST,OPTIONS");
        return new ResponseEntity(headers, HttpStatus.OK);

    }

    @RequestMapping(value = "/v1/di/cashOrder", method = RequestMethod.POST)
    public ResponseEntity<String> createCashOrder(@RequestBody Map<String, Object> payload) {
        logger.info("In method createCashOrder");
        logger.info("Payload is: " + payload);
        ResponseEntity.BodyBuilder builder = (ResponseEntity.BodyBuilder)ResponseEntity.ok();
        builder.header("Access-Control-Allow-Origin","*");
        //builder.allow(HttpMethod.POST);
        builder.contentType(MediaType.APPLICATION_JSON);
        return builder.body("{\n" +
                "\"cashOrderKey\":530,\n" +
                "\"cashOrderDate\":1478156400000,\n" +
                "\"frbOfficeAba\":\"222222222\",\n" +
                "\"abaNumber\":\"111111111\",\n" +
                "\"branchAba\":\"111111111\",\n" +
                "\"branchNbr\":\"0001\",\n" +
                "\"transactionTime\":1478201165145,\n" +
                "\"totalDollarAmount\":1000,\n" +
                "\"shipmentDate\":1478242800000,\n" +
                "\"uploadOrderIndicator\":false,\n" +
                "\"carrierId\":\"4 \",\n" +
                "\"userId\":\"diUser\",\n" +
                "\"createdBy\":{\"userId\":\"diUser\",\"userName\":\"abc\"},\n" +
                "\"createdDate\":1478201165145,\n" +
                "\"lastModifiedBy\":{\"userId\":\"diUser\",\"userName\":\"abc\"},\n" +
                "\"lastModifiedDate\":1478201165145,\n" +
                "\"branchName\":\"FIRST PEOPLES BANK, INC.\",\n" +
                "\"officeName\":\"Richmond\",\n" +
                "\"status\":null,\n" +
                "\"orderdenominationDetailInfo\":[\n" +
                "\t{\n" +
                "\t\"cashOrderDetailKey\":750,\n" +
                "\t\"cashOrderKey\":530,\n" +
                "\t\"cashOrderType\":\"Coin\",\n" +
                "\t\"denominationKey\":1,\n" +
                "\t\"denominationDisplay\":{\"denominationKey\":1,\"denominationName\":\"Penny\",\"denominationCode\":\"PE\",\"faceValue\":0.01,\"displaySequence\":1,\"valueTypeIndicator\":2,\"displayText\":\".01\"},\n" +
                "\t\"orderAmount\":1000,\n" +
                "\t\"createdBy\":{\"userId\":\"diUser\",\"userName\":\"abc\"},\n" +
                "\t\"createdDate\":1478201165145,\n" +
                "\t\"lastModifiedBy\":{\"userId\":\"diUser\",\"userName\":\"abc\"},\n" +
                "\t\"lastModifiedDate\":1478201165145\n" +
                "\t}\n" +
                "]}");
    }

    //@CrossOrigin(origins = "http://localhost:80")
    @RequestMapping(value = "/v1/di/cashOrder/{orderId}", method = RequestMethod.GET)
    //@ResponseStatus(value = HttpStatus.CREATED)
    public ResponseEntity<String> createCashOrderConfirmation(HttpSession session) {
        logger.info("In method cashOrderConfirmation");
        ResponseEntity.BodyBuilder builder = (ResponseEntity.BodyBuilder)ResponseEntity.ok();
        builder.header("Access-Control-Allow-Origin","*");
        //builder.allow(HttpMethod.POST);
        builder.contentType(MediaType.APPLICATION_JSON);
        return builder.body("{\n" +
                "\"cashOrderKey\":530,\n" +
                "\"cashOrderDate\":1478156400000,\n" +
                "\"frbOfficeAba\":\"222222222\",\n" +
                "\"abaNumber\":\"111111111\",\n" +
                "\"branchAba\":\"111111111\",\n" +
                "\"branchNbr\":\"0001\",\n" +
                "\"transactionTime\":1478201165145,\n" +
                "\"totalDollarAmount\":1000,\n" +
                "\"shipmentDate\":1478242800000,\n" +
                "\"uploadOrderIndicator\":false,\n" +
                "\"carrierId\":\"4 \",\n" +
                "\"userId\":\"diUser\",\n" +
                "\"createdBy\":{\"userId\":\"diUser\",\"userName\":\"abc\"},\n" +
                "\"createdDate\":1478201165145,\n" +
                "\"lastModifiedBy\":{\"userId\":\"diUser\",\"userName\":\"abc\"},\n" +
                "\"lastModifiedDate\":1478201165145,\n" +
                "\"branchName\":\"FIRST PEOPLES BANK, INC.\",\n" +
                "\"officeName\":\"Richmond\",\n" +
                "\"status\":null,\n" +
                "\"orderdenominationDetailInfo\":[\n" +
                "\t{\n" +
                "\t\"cashOrderDetailKey\":750,\n" +
                "\t\"cashOrderKey\":530,\n" +
                "\t\"cashOrderType\":\"Coin\",\n" +
                "\t\"denominationKey\":1,\n" +
                "\t\"denominationDisplay\":{\"denominationKey\":1,\"denominationName\":\"Penny\",\"denominationCode\":\"PE\",\"faceValue\":0.01,\"displaySequence\":1,\"valueTypeIndicator\":2,\"displayText\":\".01\"},\n" +
                "\t\"orderAmount\":1000,\n" +
                "\t\"createdBy\":{\"userId\":\"diUser\",\"userName\":\"abc\"},\n" +
                "\t\"createdDate\":1478201165145,\n" +
                "\t\"lastModifiedBy\":{\"userId\":\"diUser\",\"userName\":\"abc\"},\n" +
                "\t\"lastModifiedDate\":1478201165145\n" +
                "\t}\n" +
                "]}");
    }

}

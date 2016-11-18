package com.cprime.controller;

import org.slf4j.Logger;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.Map;

/**
 * Created by criley on 11/8/16.
 */
@RestController
public class CashOrderCreationParamController {

    private final Logger logger = org.slf4j.LoggerFactory.getLogger(this.getClass());

    @RequestMapping(value = "/v1/di/cashOrderCreationParam/{userID}/{abaNumber}", method = RequestMethod.GET)
    public ResponseEntity<String> createCashOrder(HttpSession session) {
        logger.info("In method cashOrderCreationParam");
        ResponseEntity.BodyBuilder builder = (ResponseEntity.BodyBuilder)ResponseEntity.ok();
        builder.header("Access-Control-Allow-Origin","*");
        //builder.allow(HttpMethod.POST);
        builder.contentType(MediaType.APPLICATION_JSON);
        return builder.body("{\n" +
                "\t\"shipDate\":[\n" +
                "\t\t{\n" +
                "\t\t\"branchAba\":\"111111111\",\n" +
                "\t\t\"branchNumber\":\"0001\",\n" +
                "\t\t\"officeAba\":\"222222222\",\n" +
                "\t\t\"carrierId\":\"4 \",\n" +
                "\t\t\"carrierName\":\"abc\",\n" +
                "\t\t\"shipmentDates\":[\"2017-11-07\",\"2017-11-08\",\"2017-11-09\",\"2017-11-10\",\"2017-11-11\"]},\t\t\n" +
                "\t\t{\n" +
                "\t\t\"branchAba\":\"111111111\",\n" +
                "\t\t\"branchNumber\":\"0002\",\n" +
                "\t\t\"officeAba\":\"222222222\",\n" +
                "\t\t\"carrierId\":\"4 \",\n" +
                "\t\t\"carrierName\":\"abc\",\n" +
                "\t\t\"shipmentDates\":[\"2017-11-07\",\"2017-11-08\",\"2017-11-09\",\"2017-11-10\",\"2017-11-11\"]},\n" +
                "\t\t{\n" +
                "\t\t\"branchAba\":\"111111111\",\n" +
                "\t\t\"branchNumber\":\"0003\",\n" +
                "\t\t\"officeAba\":\"222222222\",\n" +
                "\t\t\"carrierId\":\"4 \",\n" +
                "\t\t\"carrierName\":\"def\",\n" +
                "\t\t\"shipmentDates\":[\"2017-11-07\",\"2017-11-08\",\"2017-11-09\",\"2017-11-10\",\"2017-11-11\"]},\n" +
                "\t\t{\n" +
                "\t\t\"branchAba\":\"111111111\",\n" +
                "\t\t\"branchNumber\":\"0004\",\n" +
                "\t\t\"officeAba\":\"222222222\",\n" +
                "\t\t\"carrierId\":\"4 \",\n" +
                "\t\t\"carrierName\":\"def\",\n" +
                "\t\t\"shipmentDates\":[\"2017-11-07\",\"2017-11-08\",\"2017-11-09\",\"2017-11-10\",\"2017-11-11\"]},\n" +
                "\t\t{\n" +
                "\t\t\"branchAba\":\"111111111\",\n" +
                "\t\t\"branchNumber\":\"0005\",\n" +
                "\t\t\"officeAba\":\"222222222\",\n" +
                "\t\t\"carrierId\":\"4 \",\n" +
                "\t\t\"carrierName\":\"def\",\n" +
                "\t\t\"shipmentDates\":[\"2017-12-07\",\"2017-12-08\",\"2017-12-09\",\"2017-12-10\",\"2017-12-11\"]}\n" +
                "\t],\n" +
                "\t\"endpoint\":[\n" +
                "\t\t{\n" +
                "\t\t\"branchAba\":\"111111111\",\n" +
                "\t\t\"branchOfficeName\":\"FIRST PEOPLES BANK, INC.\",\n" +
                "\t\t\"diName\":\"FIRST PEOPLES BANK, INC.\",\n" +
                "\t\t\"branchName\":\"FIRST PEOPLES BANK, INC.\",\n" +
                "\t\t\"branchFRBOffice\":\"222222222\",\n" +
                "\t\t\"branchNumber\":\"0001\",\n" +
                "\t\t\"orderSizeIndicator\":\"B\"},\n" +
                "\t\t{\n" +
                "\t\t\"branchAba\":\"111111111\",\n" +
                "\t\t\"branchOfficeName\":\"SECOND PEOPLES BANK, INC.\",\n" +
                "\t\t\"diName\":\"SECOND PEOPLES BANK, INC.\",\n" +
                "\t\t\"branchName\":\"SECOND PEOPLES BANK, INC.\",\n" +
                "\t\t\"branchFRBOffice\":\"222222222\",\n" +
                "\t\t\"branchNumber\":\"0002\",\n" +
                "\t\t\"orderSizeIndicator\":\"B\"},\n" +
                "\t\t{\n" +
                "\t\t\"branchAba\":\"111111111\",\n" +
                "\t\t\"branchOfficeName\":\"THIRD PEOPLES BANK, INC.\",\n" +
                "\t\t\"diName\":\"THIRD PEOPLES BANK, INC.\",\n" +
                "\t\t\"branchName\":\"THIRD PEOPLES BANK, INC.\",\n" +
                "\t\t\"branchFRBOffice\":\"222222222\",\n" +
                "\t\t\"branchNumber\":\"0003\",\n" +
                "\t\t\"orderSizeIndicator\":\"B\"}\n" +
                "\t],\n" +
                "\t\"officeInfo\":[\n" +
                "\t\t{\n" +
                "\t\t\"officeABA\":\"222222222\",\n" +
                "\t\t\"officeID\":\"Z6\",\n" +
                "\t\t\"officeName\":\"Office $\",\n" +
                "\t\t\"timeZone\":\"Pacific\",\n" +
                "\t\t\"orderCutoffTime\":946713600000,\n" +
                "\t\t\"newCurrency\":1,\n" +
                "\t\t\"fitCurrency\":1,\n" +
                "\t\t\"coin\":1,\n" +
                "\t\t\"strapOrder\":0,\n" +
                "\t\t\"nonStandardOrder\":0}\n" +
                "\t],\n" +
                "\t\"orderInfo\":[\n" +
                "\t\t{\n" +
                "\t\t\"cashOrderKey\":530,\n" +
                "\t\t\"cashOrderDate\":1478156400000,\n" +
                "\t\t\"frbOfficeAba\":\"222222222\",\n" +
                "\t\t\"branchAba\":\"111111111\",\n" +
                "\t\t\"branchNbr\":\"0001\",\n" +
                "\t\t\"branchName\":null,\n" +
                "\t\t\"shipmentDate\":1478242800000,\n" +
                "\t\t\"carrierId\":\"4 \",\n" +
                "\t\t\"userId\":null,\n" +
                "\t\t\"userName\":null,\n" +
                "\t\t\"contactEmail\":null,\n" +
                "\t\t\"totalDollarAmount\":1000,\n" +
                "\t\t\"orderdenominationDetailInfo\":[\n" +
                "\t\t\t{\"cashOrderType\":\"Coin\",\n" +
                "\t\t\t \"denominationKey\":1,\n" +
                "\t\t\t \"orderAmount\":1000}\n" +
                "\t\t]}\n" +
                "\t]}");
    }

}

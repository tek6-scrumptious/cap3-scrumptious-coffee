package com.scrumptious.scrumptious.controllers;

import com.scrumptious.scrumptious.models.CreatePayment;
import com.scrumptious.scrumptious.models.CreatePaymentResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class PaymentController {

    @PostMapping("/create-payment-intent")
    @CrossOrigin
    public CreatePaymentResponse createPaymentIntent (@RequestBody CreatePayment createPayment) throws StripeException {

        PaymentIntentCreateParams params =
                PaymentIntentCreateParams.builder()
                        .setCurrency("usd")
                        .setAmount((long) (createPayment.getAmount() * 100L)) // replace with amount
                        .build();

        PaymentIntent paymentIntent = PaymentIntent.create(params);

        return new CreatePaymentResponse(paymentIntent.getClientSecret());

    }
}



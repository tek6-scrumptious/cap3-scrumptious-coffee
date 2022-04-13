package com.scrumptious.scrumptious.models;

import com.google.gson.annotations.SerializedName;
import lombok.Data;

@Data
public class CreatePayment {
    @SerializedName("amount")
    Double amount;

    public Double getAmount() {
        return amount;
    }
}

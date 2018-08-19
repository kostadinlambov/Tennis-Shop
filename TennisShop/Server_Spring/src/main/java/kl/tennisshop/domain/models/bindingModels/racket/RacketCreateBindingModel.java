package kl.tennisshop.domain.models.bindingModels.racket;

import kl.tennisshop.domain.entities.Category;

import java.io.Serializable;
import java.math.BigDecimal;

public class RacketCreateBindingModel implements Serializable {
    private String name;
    private String description;
    private BigDecimal price;
    private BigDecimal headSize;
    private BigDecimal weight;
    private String stringPattern;
    private String mainImageUrl;
    private String secondImageUrl;
    private String thirdImageUrl;
    private String categoryName;

    public RacketCreateBindingModel() {
    }

    public RacketCreateBindingModel(String name, String description, BigDecimal price, BigDecimal headSize, BigDecimal weight, String stringPattern, String mainImageUrl, String secondImageUrl, String thirdImageUrl, String categoryName) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.headSize = headSize;
        this.weight = weight;
        this.stringPattern = stringPattern;
        this.mainImageUrl = mainImageUrl;
        this.secondImageUrl = secondImageUrl;
        this.thirdImageUrl = thirdImageUrl;
        this.categoryName = categoryName;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return this.price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public BigDecimal getHeadSize() {
        return this.headSize;
    }

    public void setHeadSize(BigDecimal headSize) {
        this.headSize = headSize;
    }

    public BigDecimal getWeight() {
        return this.weight;
    }

    public void setWeight(BigDecimal weight) {
        this.weight = weight;
    }

    public String getStringPattern() {
        return this.stringPattern;
    }

    public void setStringPattern(String stringPattern) {
        this.stringPattern = stringPattern;
    }

    public String getMainImageUrl() {
        return this.mainImageUrl;
    }

    public void setMainImageUrl(String mainImageUrl) {
        this.mainImageUrl = mainImageUrl;
    }

    public String getSecondImageUrl() {
        return this.secondImageUrl;
    }

    public void setSecondImageUrl(String secondImageUrl) {
        this.secondImageUrl = secondImageUrl;
    }

    public String getThirdImageUrl() {
        return this.thirdImageUrl;
    }

    public void setThirdImageUrl(String thirdImageUrl) {
        this.thirdImageUrl = thirdImageUrl;
    }

    public String getCategoryName() {
        return this.categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }
}


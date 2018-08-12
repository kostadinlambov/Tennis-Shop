package kl.tennisshop.models.bindingModels.racket;

import kl.tennisshop.entities.Category;

import java.math.BigDecimal;

public class AddRacketDto {
    private String name;
    private String description;
    private BigDecimal price;
    private Integer headSize;
    private Integer weight;
    private String stringPattern;
    private String mainImageUrl;
    private String secondImageUrl;
    private String thirdImageUrl;
    private Category category;

    public AddRacketDto() {
    }

    public AddRacketDto( String name, String description, BigDecimal price, Integer headSize, Integer weight, String stringPattern, String mainImageUrl, String secondImageUrl, String thirdImageUrl, Category category) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.headSize = headSize;
        this.weight = weight;
        this.stringPattern = stringPattern;
        this.mainImageUrl = mainImageUrl;
        this.secondImageUrl = secondImageUrl;
        this.thirdImageUrl = thirdImageUrl;
        this.category = category;
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

    public Integer getHeadSize() {
        return this.headSize;
    }

    public void setHeadSize(Integer headSize) {
        this.headSize = headSize;
    }

    public Integer getWeight() {
        return this.weight;
    }

    public void setWeight(Integer weight) {
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

    public Category getCategory() {
        return this.category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}

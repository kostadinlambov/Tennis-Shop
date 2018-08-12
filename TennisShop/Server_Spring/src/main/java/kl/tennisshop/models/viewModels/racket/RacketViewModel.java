package kl.tennisshop.models.viewModels.racket;

import kl.tennisshop.entities.Category;

import java.math.BigDecimal;

public class RacketViewModel {

    private String id;
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

    public RacketViewModel() {
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
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

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(String.format("Name: %s", this.name)).append(System.lineSeparator());
        sb.append(String.format("Price: %s", this.price)).append(System.lineSeparator());
        sb.append(String.format("Category: %s", this.category.getName())).append(System.lineSeparator());

        return sb.toString();
//        return "RacketViewModel{" +
////                "id='" + id + '\'' +
////                ", name='" + name + '\'' +
////                ", description='" + description + '\'' +
////                ", price=" + price +
////                ", headSize=" + headSize +
////                ", weight=" + weight +
////                ", stringPattern='" + stringPattern + '\'' +
////                ", mainImageUrl='" + mainImageUrl + '\'' +
////                ", secondImageUrl='" + secondImageUrl + '\'' +
////                ", thirdImageUrl='" + thirdImageUrl + '\'' +
////                ", category=" + category.getName() +
////                '}';
    }
}

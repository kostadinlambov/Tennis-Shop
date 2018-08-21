package kl.tennisshop.domain.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
//@Table(name = "categories")
@Table(name = "categories", uniqueConstraints = {@UniqueConstraint(columnNames = {"id"})})
//@JsonIdentityInfo(generator= ObjectIdGenerators.IntSequenceGenerator.class)
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Category  {
    // Tour rackets
    // Allround rackets
    // Comfort rackets
    // Junior rackets

    private String id;
    private String name;
    private Set<Racket> rackets;

    public Category() {
        this.rackets = new HashSet<>();
    }

    public Category(String name) {
        this.rackets = new HashSet<>();
        this.name = name;
    }

    public Category(String name, Set<Racket> rackets) {
        this.rackets = new HashSet<>();
        this.name = name;
        this.rackets = rackets;
    }

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "id", nullable = false, unique = true, updatable = false)
    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Column(name = "name", nullable = false)
    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @OneToMany(mappedBy = "category", targetEntity = Racket.class,
            cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JsonManagedReference
    public Set<Racket> getRackets() {
        return this.rackets;
    }

    public void setRackets(Set<Racket> rackets) {
        this.rackets = rackets;
    }
}

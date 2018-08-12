package kl.tennisshop.entities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "categories")
public class Category {
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
    @GeneratedValue(generator="system-uuid2")
    @GenericGenerator(name="system-uuid2", strategy = "uuid")
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
    public Set<Racket> getRackets() {
        return this.rackets;
    }

    public void setRackets(Set<Racket> rackets) {
        this.rackets = rackets;
    }
}

package kl.tennisshop.entities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "orders")
public class Order {
    private String id;
//    private String userName;
    private User user;
//    private String racketName;
    private Set<Racket> rackets;
    private LocalDateTime entryDate;
//    private Payment payment;
//    private Integer quantity;
//    private BigDecimal price;
//    private BigDecimal totalPrice;
//    private Boolean status;
//    private String imageUrl;


    public Order() {
        this.rackets = new HashSet<>();
    }

    public Order(User user, Set<Racket> rackets) {
        this.user = user;
        this.rackets = rackets;
        this.entryDate = LocalDateTime.now();
//        this.payment = payment;
    }

    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name= "user_id")
    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @ManyToMany
    @JoinTable(name = "orders_rackets",
    joinColumns =
            @JoinColumn(name = "order_id", referencedColumnName = "id"),
    inverseJoinColumns =
    @JoinColumn(name = "racket_id", referencedColumnName = "id"))
    public Set<Racket> getRackets() {
        return this.rackets;
    }

    public void setRackets(Set<Racket> rackets) {
        this.rackets = rackets;
    }

    // BiDirectional
//    @OneToOne(optional = false, cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
////    @JoinColumn(name = "payment_id")
//    public Payment getPayment() {
//        return this.payment;
//    }
//
//    public void setPayment(Payment payment) {
//        this.payment = payment;
//    }


    @Column(name = "entry_date")
    public LocalDateTime getEntryDate() {
        return this.entryDate;
    }

    public void setEntryDate(LocalDateTime entryDate) {
        this.entryDate = entryDate;
    }
}

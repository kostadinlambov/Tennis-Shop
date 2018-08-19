//package kl.tennisshop.utils.entitiesSeed;
//
//import kl.tennisshop.domain.entities.Category;
//import kl.tennisshop.domain.entities.Racket;
//import kl.tennisshop.repositories.CategoryRepository;
//import kl.tennisshop.repositories.RacketRepository;
//import kl.tennisshop.services.CategoryService;
//import kl.tennisshop.services.RacketService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//
//import javax.annotation.PostConstruct;
//import java.math.BigDecimal;
//
//@Component
//public class RacketSeedExecutor {
//    private final RacketRepository racketRepository;
//    private final RacketService racketService;
//    private final CategoryRepository categoryRepository;
//    private final CategoryService categoryService;
//
//    @Autowired
//    public RacketSeedExecutor(RacketRepository racketRepository, RacketService racketService, CategoryRepository categoryRepository, CategoryService categoryService) {
//        this.racketRepository = racketRepository;
//        this.racketService = racketService;
//        this.categoryRepository = categoryRepository;
//        this.categoryService = categoryService;
//    }
//
//    @PostConstruct
//    public void insertRackets() {
//        // // Available Categories
//        // Tour racket
//        // Allround racket
//        // Comfort racket
//        // Junior racket
//        if (this.racketRepository.count() == 0) {
////            Category category1 = new Category("Tour racket");
////            Category category2 = new Category("Allround racket");
////            Category category3 = new Category("Comfort racket");
////            Category category4 = new Category("Junior racket");
////
////            this.categoryRepository.save(category1);
////            this.categoryRepository.save(category2);
////            this.categoryRepository.save(category3);
////            this.categoryRepository.save(category4);
//
//            Category category1 = this.categoryService.findByName("Tour racket");
//            Category category2 = this.categoryService.findByName("Allround racket");
//
//            Racket racket1 = new Racket("HEAD Graphene XT Radical MP Tour Racket (strung)",
//                    "New Racket",
//                    BigDecimal.valueOf(258.36),
//                    630,
//                    295,
//                    "16/19",
//                    "https://img2.tennis-point.com/out/pictures/generated/product/1/46_46_80/00902902185000_1.jpg",
//                    category1);
//
//            Racket racket2 = new Racket("Babolat Pure Drive",
//                    "New Racket",
//                    BigDecimal.valueOf(258.36),
//                    645,
//                    300,
//                    "16/19",
//                    "https://img2.tennis-point.com/out/pictures/generated/product/1/46_46_80/00703202984000_1.jpg",
//                    category1);
//
//            Racket racket3 = new Racket("Wilson " +
//                    "Six.One Team 95 18x20 Allround Racket",
//                    "New Racket",
//                    BigDecimal.valueOf(189.95),
//                    612,
//                    289,
//                    "18/20",
//                    "https://img2.tennis-point.com/out/pictures/generated/product/1/46_46_80/00902902185000_1.jpg",
//                    category2);
//
//            this.racketService.persistRacket(racket1);
//            this.racketService.persistRacket(racket2);
//            this.racketService.persistRacket(racket3);
//        }
////
//    }
//}

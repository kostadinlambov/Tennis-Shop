package kl.tennisshop.commandPattern.commands;

import kl.tennisshop.domain.models.viewModels.racket.RacketViewModel;
import kl.tennisshop.services.*;

import java.util.List;
import java.util.stream.Collectors;

public class AllRacketsCommand extends Command {
    public AllRacketsCommand(CategoryService categoryService, FeedbackService feedbackService, OrderService orderService, PaymentService paymentService, RacketService racketService, RoleService roleService, UserService userService) {
        super(categoryService, feedbackService, orderService, paymentService, racketService, roleService, userService);
    }

    @Override
    public String execute(String... params) {
//        List<RacketViewModel> racketViewModels = super.getRacketService().getAll();
//
//        return racketViewModels
//                .stream()
//                .map(a -> a.toString())
//                .collect(Collectors.joining("\n"));
        return null;
    }
}

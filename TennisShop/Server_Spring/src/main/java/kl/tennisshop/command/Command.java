package kl.tennisshop.command;

import kl.tennisshop.services.*;

public abstract class Command implements Executable {

    private CategoryService categoryService;
    private FeedbackService feedbackService;
    private OrderService orderService;
    private PaymentService paymentService;
    private RacketService racketService;
    private RoleService roleService;
    private UserService userService;

    protected Command(CategoryService categoryService, FeedbackService feedbackService, OrderService orderService, PaymentService paymentService, RacketService racketService, RoleService roleService, UserService userService) {
        this.categoryService = categoryService;
        this.feedbackService = feedbackService;
        this.orderService = orderService;
        this.paymentService = paymentService;
        this.racketService = racketService;
        this.roleService = roleService;
        this.userService = userService;
    }

    protected CategoryService getCategoryService() {
        return this.categoryService;
    }

    protected void setCategoryService(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    protected FeedbackService getFeedbackService() {
        return this.feedbackService;
    }

    protected void setFeedbackService(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    public OrderService getOrderService() {
        return this.orderService;
    }

    protected void setOrderService(OrderService orderService) {
        this.orderService = orderService;
    }

    protected PaymentService getPaymentService() {
        return this.paymentService;
    }

    protected void setPaymentService(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    protected RacketService getRacketService() {
        return this.racketService;
    }

    protected void setRacketService(RacketService racketService) {
        this.racketService = racketService;
    }

    protected RoleService getRoleService() {
        return this.roleService;
    }

    protected void setRoleService(RoleService roleService) {
        this.roleService = roleService;
    }

    protected UserService getUserService() {
        return this.userService;
    }

    protected void setUserService(UserService userService) {
        this.userService = userService;
    }
}

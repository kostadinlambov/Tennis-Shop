package kl.tennisshop.commandPattern.terminal;


//import kl.tennisshop.CommandFactory;
import kl.tennisshop.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Terminal implements CommandLineRunner {
    private final UserService userService;
    private final RoleService roleService;
    private final CategoryService categoryService;
    private final RacketService racketService;
    private final OrderService orderService;
    private final PaymentService paymentService;
    private final FeedbackService feedbackService;

    @Autowired
    public Terminal(UserService userService, RoleService roleService, CategoryService categoryService, RacketService racketService, OrderService orderService, PaymentService paymentService, FeedbackService feedbackService) {
        this.userService = userService;
        this.roleService = roleService;
        this.categoryService = categoryService;
        this.racketService = racketService;
        this.orderService = orderService;
        this.paymentService = paymentService;
        this.feedbackService = feedbackService;
    }
//
//    @Autowired
//    public Terminal( CategoryService categoryService, RacketService racketService) {
//
//        this.categoryService = categoryService;
//        this.racketService = racketService;
//
//    }


    @Override
    public void run(String... args) throws Exception {

        //##############################################
        // Create Roles to User
        //##############################################
//        UserRole role1 = new UserRole();
//        UserRole role2 = new UserRole();
//        role1.setAuthority("User");
//        role2.setAuthority("Admin");
//        this.roleService.persist(role1);
//        this.roleService.persist(role2);

        //##############################################
        //  Create User
        //##############################################
//        User user = new User();
//        user.setFirstName("Stamat");
//        user.setLastName("Stamov");
//        user.setEmail("stamat@abv.bg");
//        user.setPassword("1111");
//        user.setAddress("Vasil Levski 20");
//        user.setCity("Sofia");
//        user.setDeleted(false);
//
//        // Add Roles to user
//        Set<UserRole> roleSet = new HashSet<>();
//        UserRole fetchedRole1 = this.roleService.getByName("USER");
//        UserRole fetchedRole2 = this.roleService.getByName("ADMIN");
//        UserRole fetchedRole3 = this.roleService.getByName("ROOT");
//        roleSet.add(fetchedRole1);
//        roleSet.add(fetchedRole2);
//        roleSet.add(fetchedRole3);
//
//
//        user.setAuthorities(roleSet);
//
//        // save User in Database
//        User savedUser = userService.persist(user);
//        System.out.println("Saved User email: " + savedUser.getEmail());


        //##############################################
        // Get User By ID with Dto's
//        UserDto userDto1 = userService.getById(1L);
//        UserDto userDto2 = userService.getById(2L);
//
//        System.out.println(userDto1.getEmail());
//        System.out.println(userDto1.getAuthorities().size());
//
//        // Get User By ID
//        User user2 = this.userService.getByIdUser(1L);
//        System.out.println(user2.toString());


        // Update Entity with Dto's
//        userDto1.setEmail("kiro@abv.bg");
//        userDto1.setFirstName("Kiro");
//        this.userService.update(userDto1,1L);
//
//        UserDto userDto3 = userService.getById(1L);
//        System.out.printf("New Email: %s\n", userDto3.getEmail());


        // ######################################################
        // Simple Mapping
        // ######################################################

//        Address address = new Address("Varna");
//        Employee e1 = new Employee("Ivan", "Ivanov", BigDecimal.valueOf(12345), LocalDateTime.now(), address);
//
//        EmployeeDto employeeDto = DtoMappingUtil.convertEmployee(e1);
//
//        System.out.println(employeeDto);
//
//        Employee e2 = DtoMappingUtil.convertEmployeeDto(employeeDto);
//
//        System.out.println(e2);

        // ######################################################
        // Deep Mapping
        // ######################################################

//        City city = new City("Varna");
//
//        Address address = new Address(city);
//        Employee e1 = new Employee("Ivan", "Ivanov", BigDecimal.valueOf(12345), LocalDateTime.now(), address);
//
//        EmployeeDto employeeDto = DtoMappingUtil.convert(e1, EmployeeDto.class);
//
//        System.out.println(employeeDto);
//
//        Employee e2 = DtoMappingUtil.convert(employeeDto, Employee.class);
//
//        System.out.println(e2);


        //##############################################
        // //Create Category
        //##############################################

        // // Available Categories
        // Tour racket
        // Allround racket
        // Comfort racket
        // Junior racket
//
//        Category category1 = new Category("Tour racket");
//        Category category2 = new Category("Allround racket");
//        Category category3 = new Category("Comfort racket");
//        Category category4 = new Category("Junior racket");
////        category.setAuthority("Tennis Rackets");
//
//        this.categoryService.persistCategory(category1);
//        this.categoryService.persistCategory(category2);
//        this.categoryService.persistCategory(category3);
//        this.categoryService.persistCategory(category4);

        //##############################################
        // //Create Racket
        //##############################################
////
//        Category category1 = this.categoryService.findByName("Tour racket");
//        Category category2 = this.categoryService.findByName("Allround racket");
//
//        Racket racket1 = new Racket("HEAD Graphene XT Radical MP Tour Racket (strung)",
//                "New Racket",
//                BigDecimal.valueOf(258.36),
//                630,
//                295,
//                "16/19",
//                "https://img2.tennis-point.com/out/pictures/generated/product/1/46_46_80/00902902185000_1.jpg",
//                category1);
//
//        Racket racket2 = new Racket("Babolat Pure Drive",
//                "New Racket",
//                BigDecimal.valueOf(258.36),
//                645,
//                300,
//                "16/19",
//                "https://img2.tennis-point.com/out/pictures/generated/product/1/46_46_80/00703202984000_1.jpg",
//                category1);
//
//        Racket racket3 = new Racket("Wilson " +
//                "Six.One Team 95 18x20 Allround Racket",
//                "New Racket",
//                BigDecimal.valueOf(189.95),
//                612,
//                289,
//                "18/20",
//                "https://img2.tennis-point.com/out/pictures/generated/product/1/46_46_80/00902902185000_1.jpg",
//                category2);
//
//        this.racketService.persistRacket(racket1);
//        this.racketService.persistRacket(racket2);
//        this.racketService.persistRacket(racket3);

        //##############################################
        // //Find All Rackets By Category
        //##############################################
//
//        Category category1 = this.categoryService.findByName("Tour racket");
//        Category category2 = this.categoryService.findByName("Allround racket");
//
//        List<Racket> allRacketsByCategory = this.racketService.findAllRacketsByCategory(category2);
//
//        System.out.println("Racket Count: " + allRacketsByCategory.size());
//
//        for (Racket racket : allRacketsByCategory) {
//            System.out.println("Name: " + racket.getAuthority());
//       }

        //##############################################
        // Create Order
        //##############################################

//        User user = this.userService.getByEmail("pesho@abv.bg");
////
////        Racket racket1 = this.racketService.getByName("Babolat Pure Drive");
////        Racket racket2 = this.racketService.getByName("HEAD Graphene XT Radical MP Tour Racket (strung)");
////
////
////        Set<Racket> rackets = new HashSet<>();
////        rackets.add(racket1);
////        rackets.add(racket2);
////
////        System.out.println(user.getFirstName());
////        System.out.println(racket1.getAuthority());
////        System.out.println(racket2.getAuthority());
////
////        Order order = new Order(user,rackets);
//////
////        Order savedOrder = this.orderService.persistOrder(order);
////
////        for (Racket racket : savedOrder.getRackets()) {
////            System.out.println("SavedOrder Racket name: " + racket.getAuthority());
////        }


        //##############################################
        // Create Payment
        //##############################################
////        User user = this.userService.getByEmail("stamat@abv.bg");
//
//        Payment payment = new Payment(BigDecimal.valueOf(256.52),user, PaymentType.CREDIT_CARD.name(),"BNB", savedOrder);
//
//        payment.setCardNum(25698745825L);
//        payment.setCCV(123);
//
//        Payment savedPayment = this.paymentService.persistPayment(payment);
//        System.out.println(savedPayment.getOrder().getId());

        //##############################################
        // Create Feedback
        //##############################################

//        User user = this.userService.getByEmail("pesho@abv.bg");
//        Racket racket1 = this.racketService.getByName("Babolat Pure Drive");
//        String content = "Feedback content: dfadasfadsfsdafsa";
//
//        Feedback feedback = new Feedback(content,user, racket1);
//
//        this.feedbackService.persistFeedback(feedback);

        //##############################################
        //  Register User with Command Pattern
        //##############################################

//        CommandFactory commandFactory = new CommandFactory(this.userService, categoryService, feedbackService, orderService, paymentService, racketService, roleService);

        // Using Console to read input params
//        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
//        while(true){
//            String line = reader.readLine();
//            if(line.equals("END")){
//                break;
//            }
//
//            String[] params = line.split("\\|");
//            String commands = params[0];
//
//            String[] newParams = new String[params.length - 1];
//
//            if(params.length > 1){
//                newParams = Arrays.copyOfRange(params, 1, params.length);
//            }
//
//            Executable executable = commandFactory.getCommand(commands);
//            String result = executable.execute(newParams);
//            System.out.println(result);
//
//        }
        //##############################################
        // Manual input of the Params for Register
        //##############################################
//        CommandFactory commandFactory = new CommandFactory(this.userService, categoryService, feedbackService, orderService, paymentService, racketService, roleService);
//        String[] newUserParams =  new String[]{
//                "Pesho", "Peshov",  "pesho@abv.bg", "1111", "1111", "Vasil Levski 20", "Sofia"
//        };
//
//        String command = "Register";
//        Executable executable = commandFactory.getCommand(command);
//        String result = executable.execute(newUserParams);
//        System.out.println(result);


//        //##############################################
//////         Try to logout before login
//        //##############################################
//        String logoutCommand = "Logout";
//        Executable executable2 = commandFactory.getCommand(logoutCommand);
//        String resultLogout = executable2.execute();
//        System.out.println(resultLogout);
//
//        //##############################################
//        //  Login User with Command Pattern
//        //##############################################
        // Manual input of the Params
//        String[] newUserLoginParams = new String[]{
//                "pesho@abv.bg", "1111"
//        };
//        String loginCommand = "Login";
//        Executable executable1 = commandFactory.getCommand(loginCommand);
//        String resultLogin = executable1.execute(newUserLoginParams);
//        System.out.println(resultLogin);
////
//        // Try to login again, when we are already logged in!
//        String resultLogin2 = executable1.execute(newUserLoginParams);
//        System.out.println(resultLogin2);

        //##############################################
        //  LogOut User with Command Pattern
        //##############################################

//        String logoutCommand = "Logout";
//        Executable executable3 = commandFactory.getCommand(logoutCommand);
//        String resultLogout2 = executable3.execute();
//        System.out.println(resultLogout2);

        //##############################################
        // Manual Input for  Add Racket with Command Pattern
        //##############################################
//
//        String[] newRacketParams1 = new String[]{
//                "HEAD Graphene XT Radical MP Tour Racket (strung)",
//                "New Racket",
//                "258.36",
//                "630",
//                "295",
//                "16/15",
//                "https://img2.tennis-point.com/out/pictures/generated/product/1/46_46_80/00902902185000_1.jpg",
//                null,
//                null,
//                "Allround racket"
//        };
//
//        String[] newRacketParams2 = new String[]{
//                "Babolat Pure Drive",
//                "New Racket",
//                "258.36",
//                "630",
//                "295",
//                "16/15",
//                "https://img2.tennis-point.com/out/pictures/generated/product/1/46_46_80/00902902185000_1.jpg",
//                null,
//                null,
//                "Allround racket"
//        };
//
//        String commandAddRacket = "AddRacket";
//        Executable executableRacket = commandFactory.getCommand(commandAddRacket);
//        String resultAddRacket1 = executableRacket.execute(newRacketParams1);
//        String resultAddRacket2 = executableRacket.execute(newRacketParams2);
//        System.out.println(resultAddRacket1);
//        System.out.println(resultAddRacket2);

        //##############################################
        // Manual Input for  Get All Rackets with Command Pattern
        //##############################################

//        String commandFindAllRackets = "AllRackets";
//        Executable executableAllRackets = commandFactory.getCommand(commandFindAllRackets);
//        String resultAllRackets = executableAllRackets.execute();
//        System.out.println(resultAllRackets);


    }
}

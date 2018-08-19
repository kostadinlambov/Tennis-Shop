package kl.tennisshop.web.controllers;

import org.springframework.web.servlet.ModelAndView;

public abstract class BaseController {
    public ModelAndView view(String viewName, Object viewModel, String title) {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("fragments/layout");
        modelAndView.addObject("viewName", viewName);
        modelAndView.addObject("viewModel", viewModel);
        modelAndView.addObject("title", title);

        return modelAndView;
    }

    public ModelAndView view(String viewName) {
        return this.view(viewName, null, null);
    }

    public ModelAndView view(String viewName, Object viewModel) {
        return this.view(viewName, viewModel);
    }

    public ModelAndView redirect(String redirectUrl) {
        ModelAndView modelAndView = new ModelAndView();

        modelAndView.setViewName("redirect:" + redirectUrl);

        return modelAndView;
    }
//    public ModelAndView view(String viewName, ModelAndView modelAndView) {
//        modelAndView.setViewName(viewName);
//
//        return modelAndView;
//    }
//
//    public ModelAndView view(String viewName) {
//        return this.view(viewName, new ModelAndView());
//    }
//
//    public ModelAndView redirect(String redirectUrl) {
//        ModelAndView modelAndView = new ModelAndView();
//
//        modelAndView.setViewName("redirect:" + redirectUrl);
//
//        return modelAndView;
//    }
}

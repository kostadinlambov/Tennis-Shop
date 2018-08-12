package kl.tennisshop.utils.modelMapper;

import org.modelmapper.ModelMapper;

public class ModelMapperConfig {
    private static ModelMapper modelMapper;

    public static ModelMapper getInstance(){
        if(modelMapper == null){
            modelMapper = new ModelMapper();
        }

        return modelMapper;
    }
}

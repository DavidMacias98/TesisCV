package com.micro.sendmailms.models;

import java.util.List;

import org.springframework.web.bind.annotation.RequestParam;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RequestAdvancedSendEmail {

	 String toMail;
	 String idPlantilla;
	 List<Replacers>replacers;
	
}

package com.campus.virtual.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CabezeraRespondePorcentajeAssistByStudent {

	private String student;
	private double totalAssist;
	private List<RespondePorcentajeAssistByStudent> data;	
	
	
}

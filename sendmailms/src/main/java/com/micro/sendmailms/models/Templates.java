package com.micro.sendmailms.models;

import java.io.Serializable;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import com.fasterxml.jackson.annotation.JsonRawValue;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "templates", schema = "email")
public class Templates {
	
		private static final long serialVersionUID = 1L;
		@Id
		@Column(name = "id_plantilla", length = 50, nullable = false)
		private String idPlantilla;
		
		@Column(name = "nombre", unique = true, length = 100, nullable = false)
		private String nombre;
		
		@Column(name = "asunto", length = 100, nullable = false)
		private String asunto;
		
		@Column(name = "cuerpo", columnDefinition = "json")
		@JsonRawValue
		private String cuerpo;
		
		
		@Column(name = "urlTemplate")
		private String urlTemplate;
		
		@Column(name = "estado", length = 1, nullable = false)
		private String estado;
}

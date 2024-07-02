package com.campus.virtual.models;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "AsistenciasDetalles", schema = "campus")

public class AsistenciasDetalles {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	
	@OneToOne
	private WebUser student;
	
	@ManyToOne
	private Asistencias assists;
	
	private Boolean present;
	
	@PrePersist
	public void prepersist() {
		
		this.present = false;
		//this.codigo= this.representante.getName().substring(0,2)+ this.estudiante.getName().substring(0,2)+this.curso.getName().substring(0,2);
	}
	
}

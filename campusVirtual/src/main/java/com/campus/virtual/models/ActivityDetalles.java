package com.campus.virtual.models;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

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
@Table(name = "ActivityDetalles", schema = "campus")
public class ActivityDetalles {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@OneToOne
	private WebUser student;
	
	@ManyToOne
	private Activity activity;
	
	private String urlActivity;
	
	private String urlActivityPresentada;
	
	private String statusEntrega;
	
	private String statusCalifica;

	private int numeroIntento;
	
	
	@JsonFormat()
	private BigDecimal calificacion;
	
	
	private LocalDateTime ultimaModificacion;
	
	@PrePersist
	public void prepersist() {
		this.numeroIntento= 0;
		//this.codigo= this.representante.getName().substring(0,2)+ this.estudiante.getName().substring(0,2)+this.curso.getName().substring(0,2);
	}
	@PreUpdate
	public void preUpdate() {
		this.ultimaModificacion= LocalDateTime.now();
		//this.codigo= this.representante.getName().substring(0,2)+ this.estudiante.getName().substring(0,2)+this.curso.getName().substring(0,2);
	}
}

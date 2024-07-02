package com.campus.virtual.models;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "Activity", schema = "campus")
public class Activity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	private String nameTema;
	
	private String observacion;
	
	private String urlFile;
	
	@OneToOne
	@JoinColumn(name="materia")
	private Materias materia;
	
	@OneToOne
	@JoinColumn(name="docente")
	private AdminUser docente;

	@JsonFormat(pattern = "YYYY-MM-DD")
	private LocalDate fechaAsignada;
	
	
	@JsonFormat(pattern = "YYYY-MM-DD")
	private LocalDate fechaMaxEntrega;
	
	@OneToOne
	@JoinColumn(name="tipo")
	private CatalogoTipoActividad tipo;
	
	@OneToOne
	@JoinColumn(name="parcial")
	private CatalogoParciales parcial;
	
	
	
	
	
	@PrePersist
	public void prepersist() {
		this.fechaAsignada = LocalDate.now();
		//this.codigo= this.representante.getName().substring(0,2)+ this.estudiante.getName().substring(0,2)+this.curso.getName().substring(0,2);
	}
	
	
}

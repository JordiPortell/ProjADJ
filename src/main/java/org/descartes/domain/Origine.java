package org.descartes.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Origine {
	
long idOri;
String libelle;

public Origine(){
	
}

public Origine(String libelle) {
	super();
	this.libelle = libelle;
}

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
public long getId() {
	return idOri;
}

public void setId(long id) {
	this.idOri = id;
}

public String getLibelle() {
	return libelle;
}

public void setLibelle(String libelle) {
	this.libelle = libelle;
}



}

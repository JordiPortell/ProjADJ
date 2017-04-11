package org.descartes.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Produit {
long idProd;
String Libelle;
String Type;
long prix;


public Produit(){
	super();
}

public Produit(String libelle, String type, long prix) {
	super();
	Libelle = libelle;
	Type = type;
	this.prix = prix;
}

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
public long getId() {
	return idProd;
}

public void setId(long id) {
	this.idProd = id;
}

public String getLibelle() {
	return Libelle;
}

public void setLibelle(String libelle) {
	Libelle = libelle;
}

public String getType() {
	return Type;
}

public void setType(String type) {
	Type = type;
}

public long getPrix() {
	return prix;
}

public void setPrix(long prix) {
	this.prix = prix;
}



}

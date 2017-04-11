package org.descartes.domain;

import org.descartes.domain.Client;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
public class Commande{
	private long IdCommande;
	 Client commandeur;
	
	 
		public Commande(Client commandeur) {
		super();
		this.commandeur = commandeur;
	}
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
	 public long getIdCommande() {
		return IdCommande;
	}
	public void setIdCommande(long idCommande) {
		IdCommande = idCommande;
	}
	
	
	public Client getCommandeur() {
		return commandeur;
	}
	public void setCommandeur(Client commandeur) {
		this.commandeur = commandeur;
	}
	


}
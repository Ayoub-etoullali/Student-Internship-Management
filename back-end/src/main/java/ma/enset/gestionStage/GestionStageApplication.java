package ma.enset.gestionStage;

import ma.enset.gestionStage.dtos.*;
import ma.enset.gestionStage.entities.Etudiant;
import ma.enset.gestionStage.entities.OffreStage;
import ma.enset.gestionStage.entities.Postes;
import ma.enset.gestionStage.mappers.EtudiantMapper;
import ma.enset.gestionStage.mappers.OffreStageMapper;
import ma.enset.gestionStage.services.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.*;
import java.util.stream.Stream;


@SpringBootApplication
public class GestionStageApplication {
    public GestionStageApplication() {
    }

    public static void main(String[] args) {
        SpringApplication.run(GestionStageApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(EtudiantService etudiantService,
                                        OffreStageService offreStageService,
                                        ProjetService projetService,
                                        StageService stageService,
                                        PostesService postesService) {
        return (args) -> {


            //=> Etudiant
            Stream.of("ayoub", "hayat", "samira", "mustapha", "karima", "radouan").forEach(name -> {
                EtudiantDTO etudiantDTO = new EtudiantDTO();
                etudiantDTO.setPrenom(name);
                etudiantDTO.setNom("ETOULLALI");
                etudiantDTO.setEmail(name + "@gmail.com");
                etudiantDTO.setUsername(name);
                etudiantDTO.setPassword(name);
                etudiantDTO.setCNE("M" + new String());
                etudiantDTO.setCIN("U" + new String());
                etudiantDTO.setTelephone("+212 6" + new String());
                etudiantDTO.setAdresse("ERRACHIDIA");
                etudiantService.createEtudiant(etudiantDTO);
            });

            etudiantService.getAllEtudiants().forEach(etudiant -> {

                //=> Stage
                StageDTO stageDTO = new StageDTO();
                stageDTO.setTitre("stage de " + etudiant.getPrenom());
                stageDTO.setDescription("");
                stageDTO.setEtudiantDTO(etudiant);
                StageDTO stage_=stageService.saveStage(stageDTO);

                //=> Projet
                Collection<ProjetDTO> projetDTOS=new ArrayList<>();
                Stream.of("projet 1","projet 2","projet 3").forEach(intitule->{
                    ProjetDTO projetDTO=new ProjetDTO();
                    projetDTO.setStageDTO(stage_);
                    projetDTO.setIntitule(intitule);
                    projetDTO.setPath("https://"+new String());
                    projetDTO.setDescription("Description about "+intitule);
                    projetService.saveProjet(projetDTO);
                    projetDTOS.add(projetDTO);
                });

                //=> Filière

                //=> Offre de stage
                List<OffreStageDTO> offreStageDTOS = new ArrayList<>();
                Stream.of("Data Science", "Data Analyst", "Data Engineer", "Mobile Developer",
                        "Backend Developer", "Frontend Developer").forEach(post -> {
                    OffreStageDTO offreStageDTO = new OffreStageDTO();
                    offreStageDTO.setEntreprise("Informatique");
                    offreStageDTO.setDateDebut(new Date());
                    offreStageDTO.setDateFin(new Date());
                    offreStageDTO.setTechnologie("Java");
                    offreStageDTO.setDescription("");
                    offreStageDTO.setPoste(post);
                    offreStageDTO.setEtudiantDTO(etudiant);
                    offreStageService.saveOffreStage(offreStageDTO);
                    offreStageDTOS.add(offreStageDTO);
                });

            });

            Stream.of("java", "spring", "data-scientist", "web-developer", "ai", "ml").forEach(name -> {
                PostesDTO poste = new PostesDTO();
                poste.setTitre("Poste "+name);
                poste.setDescription("Description de poste "+name);
                poste.setTag(name);
                poste.setDate(new Date());
                poste.setAutheur("Autheur");
                postesService.savePostes(poste);
            });

            //=> Problem
            //System.out.println(projetService.getProjetById(1L));


            System.out.println("\n </> By Ayoub ETOULLALI \n");

        };
    }
}

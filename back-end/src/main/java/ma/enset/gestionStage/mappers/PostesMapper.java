package ma.enset.gestionStage.mappers;

import ma.enset.gestionStage.dtos.PostesDTO;
import ma.enset.gestionStage.dtos.StageDTO;
import ma.enset.gestionStage.entities.Postes;
import ma.enset.gestionStage.entities.Stage;

public interface PostesMapper {
    PostesDTO fromPostes(Postes postes);

    Postes fromPostesDTO(PostesDTO postesDTO);
}

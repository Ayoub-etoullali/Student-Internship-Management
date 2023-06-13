package ma.enset.gestionStage.services;

import lombok.AllArgsConstructor;
import ma.enset.gestionStage.dtos.ProjetDTO;
import ma.enset.gestionStage.dtos.StageDTO;
import ma.enset.gestionStage.entities.Projet;
import ma.enset.gestionStage.entities.Stage;
import ma.enset.gestionStage.mappers.StageMapper;
import ma.enset.gestionStage.repositories.StageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class StageServiceImp implements StageService {

    private StageRepository stageRepository;
    private StageMapper mapper;

    public List<StageDTO> getStagesByEtudiantId(Long etudiantId) {
        List<Stage> stages = stageRepository.findByEtudiantId(etudiantId);
        List<StageDTO> stageDTOS = stages
                .stream()
                .map(stage -> mapper.fromStage(stage))
                .collect(Collectors.toList()); //String to list
        return stageDTOS;
    }

    @Override
    public StageDTO saveStage(StageDTO stageDTO) {
        Stage stage=mapper.fromStageDTO(stageDTO);
        return mapper.fromStage(stageRepository.save(stage));
    }
}

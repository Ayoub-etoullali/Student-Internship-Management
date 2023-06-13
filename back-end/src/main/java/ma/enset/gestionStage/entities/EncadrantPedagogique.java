package ma.enset.gestionStage.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
@DiscriminatorValue("EP")
public class EncadrantPedagogique extends Enseignant {
    @OneToMany(mappedBy = "EncadrentPedagogique")
    private List<SessionEncadrement> sessionEncadrement;
}

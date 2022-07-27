package com.ssafy.jiguhero.data.entity;

import com.ssafy.jiguhero.data.dto.MissionDto;
import com.ssafy.jiguhero.util.ModelMapperUtils;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Mission")
public class Mission {
    @Id
    @Column(name = "mission_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long missionId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, name = "start_date")
    private LocalDateTime startDate;

    @Column(nullable = false, name = "end_date")
    private LocalDateTime endDate;

    @Column(nullable = false, name = "enrty_point")
    private int entryPoint;

    @Column(nullable = true, name = "sido_code")
    private String sidoCode;

    @Column(nullable = true, name = "gugun_code")
    private String gugunCode;

    @Column(nullable = true, name = "dong_code")
    private String dongCode;

    @Column(nullable = false, name = "now_person")
    private int nowPerson;

    @Column(nullable = false, name = "max_person")
    private int maxPerson;

    @Column(nullable = false, name = "failed_person")
    private int failedPerson;

    @Column(nullable = false)
    private int likes;

    @Column(nullable = false)
    private int hits;

    public static Mission of(MissionDto missionDto) {
        Mission missionEntity = ModelMapperUtils.getModelMapper().map(missionDto, Mission.class);

        return missionEntity;
    }
}
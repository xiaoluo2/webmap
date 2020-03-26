var wms_layers = [];


        var lyr_GooglecnSatellite_0 = new ol.layer.Tile({
            'title': 'Google.cn Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_csa_assigned_to_WROB_2 = new ol.format.GeoJSON();
var features_csa_assigned_to_WROB_2 = format_csa_assigned_to_WROB_2.readFeatures(json_csa_assigned_to_WROB_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_WROB_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_WROB_2.addFeatures(features_csa_assigned_to_WROB_2);
var lyr_csa_assigned_to_WROB_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_WROB_2, 
                style: style_csa_assigned_to_WROB_2,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_WROB_2.png" /> csa_assigned_to_WROB'
            });
var format_csa_assigned_to_WKUH_3 = new ol.format.GeoJSON();
var features_csa_assigned_to_WKUH_3 = format_csa_assigned_to_WKUH_3.readFeatures(json_csa_assigned_to_WKUH_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_WKUH_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_WKUH_3.addFeatures(features_csa_assigned_to_WKUH_3);
var lyr_csa_assigned_to_WKUH_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_WKUH_3, 
                style: style_csa_assigned_to_WKUH_3,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_WKUH_3.png" /> csa_assigned_to_WKUH'
            });
var format_csa_assigned_to_WALL_4 = new ol.format.GeoJSON();
var features_csa_assigned_to_WALL_4 = format_csa_assigned_to_WALL_4.readFeatures(json_csa_assigned_to_WALL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_WALL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_WALL_4.addFeatures(features_csa_assigned_to_WALL_4);
var lyr_csa_assigned_to_WALL_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_WALL_4, 
                style: style_csa_assigned_to_WALL_4,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_WALL_4.png" /> csa_assigned_to_WALL'
            });
var format_csa_assigned_to_THAR_5 = new ol.format.GeoJSON();
var features_csa_assigned_to_THAR_5 = format_csa_assigned_to_THAR_5.readFeatures(json_csa_assigned_to_THAR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_THAR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_THAR_5.addFeatures(features_csa_assigned_to_THAR_5);
var lyr_csa_assigned_to_THAR_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_THAR_5, 
                style: style_csa_assigned_to_THAR_5,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_THAR_5.png" /> csa_assigned_to_THAR'
            });
var format_csa_assigned_to_REDM_6 = new ol.format.GeoJSON();
var features_csa_assigned_to_REDM_6 = format_csa_assigned_to_REDM_6.readFeatures(json_csa_assigned_to_REDM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_REDM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_REDM_6.addFeatures(features_csa_assigned_to_REDM_6);
var lyr_csa_assigned_to_REDM_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_REDM_6, 
                style: style_csa_assigned_to_REDM_6,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_REDM_6.png" /> csa_assigned_to_REDM'
            });
var format_csa_assigned_to_PCHR_7 = new ol.format.GeoJSON();
var features_csa_assigned_to_PCHR_7 = format_csa_assigned_to_PCHR_7.readFeatures(json_csa_assigned_to_PCHR_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_PCHR_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_PCHR_7.addFeatures(features_csa_assigned_to_PCHR_7);
var lyr_csa_assigned_to_PCHR_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_PCHR_7, 
                style: style_csa_assigned_to_PCHR_7,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_PCHR_7.png" /> csa_assigned_to_PCHR'
            });
var format_csa_assigned_to_MOKE_8 = new ol.format.GeoJSON();
var features_csa_assigned_to_MOKE_8 = format_csa_assigned_to_MOKE_8.readFeatures(json_csa_assigned_to_MOKE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_MOKE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_MOKE_8.addFeatures(features_csa_assigned_to_MOKE_8);
var lyr_csa_assigned_to_MOKE_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_MOKE_8, 
                style: style_csa_assigned_to_MOKE_8,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_MOKE_8.png" /> csa_assigned_to_MOKE'
            });
var format_csa_assigned_to_KMAN_9 = new ol.format.GeoJSON();
var features_csa_assigned_to_KMAN_9 = format_csa_assigned_to_KMAN_9.readFeatures(json_csa_assigned_to_KMAN_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_KMAN_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_KMAN_9.addFeatures(features_csa_assigned_to_KMAN_9);
var lyr_csa_assigned_to_KMAN_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_KMAN_9, 
                style: style_csa_assigned_to_KMAN_9,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_KMAN_9.png" /> csa_assigned_to_KMAN'
            });
var format_csa_assigned_to_JSAF_10 = new ol.format.GeoJSON();
var features_csa_assigned_to_JSAF_10 = format_csa_assigned_to_JSAF_10.readFeatures(json_csa_assigned_to_JSAF_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_JSAF_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_JSAF_10.addFeatures(features_csa_assigned_to_JSAF_10);
var lyr_csa_assigned_to_JSAF_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_JSAF_10, 
                style: style_csa_assigned_to_JSAF_10,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_JSAF_10.png" /> csa_assigned_to_JSAF'
            });
var format_csa_assigned_to_JGRZ_11 = new ol.format.GeoJSON();
var features_csa_assigned_to_JGRZ_11 = format_csa_assigned_to_JGRZ_11.readFeatures(json_csa_assigned_to_JGRZ_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_JGRZ_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_JGRZ_11.addFeatures(features_csa_assigned_to_JGRZ_11);
var lyr_csa_assigned_to_JGRZ_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_JGRZ_11, 
                style: style_csa_assigned_to_JGRZ_11,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_JGRZ_11.png" /> csa_assigned_to_JGRZ'
            });
var format_csa_assigned_to_JFOR_12 = new ol.format.GeoJSON();
var features_csa_assigned_to_JFOR_12 = format_csa_assigned_to_JFOR_12.readFeatures(json_csa_assigned_to_JFOR_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_JFOR_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_JFOR_12.addFeatures(features_csa_assigned_to_JFOR_12);
var lyr_csa_assigned_to_JFOR_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_JFOR_12, 
                style: style_csa_assigned_to_JFOR_12,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_JFOR_12.png" /> csa_assigned_to_JFOR'
            });
var format_csa_assigned_to_JFEA_13 = new ol.format.GeoJSON();
var features_csa_assigned_to_JFEA_13 = format_csa_assigned_to_JFEA_13.readFeatures(json_csa_assigned_to_JFEA_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_JFEA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_JFEA_13.addFeatures(features_csa_assigned_to_JFEA_13);
var lyr_csa_assigned_to_JFEA_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_JFEA_13, 
                style: style_csa_assigned_to_JFEA_13,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_JFEA_13.png" /> csa_assigned_to_JFEA'
            });
var format_csa_assigned_to_JDUS_14 = new ol.format.GeoJSON();
var features_csa_assigned_to_JDUS_14 = format_csa_assigned_to_JDUS_14.readFeatures(json_csa_assigned_to_JDUS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_JDUS_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_JDUS_14.addFeatures(features_csa_assigned_to_JDUS_14);
var lyr_csa_assigned_to_JDUS_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_JDUS_14, 
                style: style_csa_assigned_to_JDUS_14,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_JDUS_14.png" /> csa_assigned_to_JDUS'
            });
var format_csa_assigned_to_FULT_15 = new ol.format.GeoJSON();
var features_csa_assigned_to_FULT_15 = format_csa_assigned_to_FULT_15.readFeatures(json_csa_assigned_to_FULT_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_FULT_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_FULT_15.addFeatures(features_csa_assigned_to_FULT_15);
var lyr_csa_assigned_to_FULT_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_FULT_15, 
                style: style_csa_assigned_to_FULT_15,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_FULT_15.png" /> csa_assigned_to_FULT'
            });
var format_csa_assigned_to_DSTO_16 = new ol.format.GeoJSON();
var features_csa_assigned_to_DSTO_16 = format_csa_assigned_to_DSTO_16.readFeatures(json_csa_assigned_to_DSTO_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_DSTO_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_DSTO_16.addFeatures(features_csa_assigned_to_DSTO_16);
var lyr_csa_assigned_to_DSTO_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_DSTO_16, 
                style: style_csa_assigned_to_DSTO_16,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_DSTO_16.png" /> csa_assigned_to_DSTO'
            });
var format_csa_assigned_to_DSAF_17 = new ol.format.GeoJSON();
var features_csa_assigned_to_DSAF_17 = format_csa_assigned_to_DSAF_17.readFeatures(json_csa_assigned_to_DSAF_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_DSAF_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_DSAF_17.addFeatures(features_csa_assigned_to_DSAF_17);
var lyr_csa_assigned_to_DSAF_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_DSAF_17, 
                style: style_csa_assigned_to_DSAF_17,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_DSAF_17.png" /> csa_assigned_to_DSAF'
            });
var format_csa_assigned_to_DCRO_18 = new ol.format.GeoJSON();
var features_csa_assigned_to_DCRO_18 = format_csa_assigned_to_DCRO_18.readFeatures(json_csa_assigned_to_DCRO_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_DCRO_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_DCRO_18.addFeatures(features_csa_assigned_to_DCRO_18);
var lyr_csa_assigned_to_DCRO_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_DCRO_18, 
                style: style_csa_assigned_to_DCRO_18,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_DCRO_18.png" /> csa_assigned_to_DCRO'
            });
var format_csa_assigned_to_CAMA_19 = new ol.format.GeoJSON();
var features_csa_assigned_to_CAMA_19 = format_csa_assigned_to_CAMA_19.readFeatures(json_csa_assigned_to_CAMA_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_CAMA_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_CAMA_19.addFeatures(features_csa_assigned_to_CAMA_19);
var lyr_csa_assigned_to_CAMA_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_CAMA_19, 
                style: style_csa_assigned_to_CAMA_19,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_CAMA_19.png" /> csa_assigned_to_CAMA'
            });
var format_csa_assigned_to_BHAS_20 = new ol.format.GeoJSON();
var features_csa_assigned_to_BHAS_20 = format_csa_assigned_to_BHAS_20.readFeatures(json_csa_assigned_to_BHAS_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_BHAS_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_BHAS_20.addFeatures(features_csa_assigned_to_BHAS_20);
var lyr_csa_assigned_to_BHAS_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_BHAS_20, 
                style: style_csa_assigned_to_BHAS_20,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_BHAS_20.png" /> csa_assigned_to_BHAS'
            });
var format_csa_assigned_to_AWIS_21 = new ol.format.GeoJSON();
var features_csa_assigned_to_AWIS_21 = format_csa_assigned_to_AWIS_21.readFeatures(json_csa_assigned_to_AWIS_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_AWIS_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_AWIS_21.addFeatures(features_csa_assigned_to_AWIS_21);
var lyr_csa_assigned_to_AWIS_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_AWIS_21, 
                style: style_csa_assigned_to_AWIS_21,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_AWIS_21.png" /> csa_assigned_to_AWIS'
            });
var format_csa_assigned_to_ASHA_22 = new ol.format.GeoJSON();
var features_csa_assigned_to_ASHA_22 = format_csa_assigned_to_ASHA_22.readFeatures(json_csa_assigned_to_ASHA_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_ASHA_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_ASHA_22.addFeatures(features_csa_assigned_to_ASHA_22);
var lyr_csa_assigned_to_ASHA_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_ASHA_22, 
                style: style_csa_assigned_to_ASHA_22,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_ASHA_22.png" /> csa_assigned_to_ASHA'
            });
var format_csa_assigned_to_ASCH_23 = new ol.format.GeoJSON();
var features_csa_assigned_to_ASCH_23 = format_csa_assigned_to_ASCH_23.readFeatures(json_csa_assigned_to_ASCH_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_ASCH_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_ASCH_23.addFeatures(features_csa_assigned_to_ASCH_23);
var lyr_csa_assigned_to_ASCH_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_ASCH_23, 
                style: style_csa_assigned_to_ASCH_23,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_ASCH_23.png" /> csa_assigned_to_ASCH'
            });
var format_csa_assigned_to_ASAN_24 = new ol.format.GeoJSON();
var features_csa_assigned_to_ASAN_24 = format_csa_assigned_to_ASAN_24.readFeatures(json_csa_assigned_to_ASAN_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_ASAN_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_ASAN_24.addFeatures(features_csa_assigned_to_ASAN_24);
var lyr_csa_assigned_to_ASAN_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_ASAN_24, 
                style: style_csa_assigned_to_ASAN_24,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_ASAN_24.png" /> csa_assigned_to_ASAN'
            });
var format_csa_assigned_to_ARIC_25 = new ol.format.GeoJSON();
var features_csa_assigned_to_ARIC_25 = format_csa_assigned_to_ARIC_25.readFeatures(json_csa_assigned_to_ARIC_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_ARIC_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_ARIC_25.addFeatures(features_csa_assigned_to_ARIC_25);
var lyr_csa_assigned_to_ARIC_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_ARIC_25, 
                style: style_csa_assigned_to_ARIC_25,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_ARIC_25.png" /> csa_assigned_to_ARIC'
            });
var format_csa_assigned_to_ACAM_26 = new ol.format.GeoJSON();
var features_csa_assigned_to_ACAM_26 = format_csa_assigned_to_ACAM_26.readFeatures(json_csa_assigned_to_ACAM_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csa_assigned_to_ACAM_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csa_assigned_to_ACAM_26.addFeatures(features_csa_assigned_to_ACAM_26);
var lyr_csa_assigned_to_ACAM_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csa_assigned_to_ACAM_26, 
                style: style_csa_assigned_to_ACAM_26,
                interactive: true,
                title: '<img src="styles/legend/csa_assigned_to_ACAM_26.png" /> csa_assigned_to_ACAM'
            });

lyr_GooglecnSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_csa_assigned_to_WROB_2.setVisible(true);lyr_csa_assigned_to_WKUH_3.setVisible(true);lyr_csa_assigned_to_WALL_4.setVisible(true);lyr_csa_assigned_to_THAR_5.setVisible(true);lyr_csa_assigned_to_REDM_6.setVisible(true);lyr_csa_assigned_to_PCHR_7.setVisible(true);lyr_csa_assigned_to_MOKE_8.setVisible(true);lyr_csa_assigned_to_KMAN_9.setVisible(true);lyr_csa_assigned_to_JSAF_10.setVisible(true);lyr_csa_assigned_to_JGRZ_11.setVisible(true);lyr_csa_assigned_to_JFOR_12.setVisible(true);lyr_csa_assigned_to_JFEA_13.setVisible(true);lyr_csa_assigned_to_JDUS_14.setVisible(true);lyr_csa_assigned_to_FULT_15.setVisible(true);lyr_csa_assigned_to_DSTO_16.setVisible(true);lyr_csa_assigned_to_DSAF_17.setVisible(true);lyr_csa_assigned_to_DCRO_18.setVisible(true);lyr_csa_assigned_to_CAMA_19.setVisible(true);lyr_csa_assigned_to_BHAS_20.setVisible(true);lyr_csa_assigned_to_AWIS_21.setVisible(true);lyr_csa_assigned_to_ASHA_22.setVisible(true);lyr_csa_assigned_to_ASCH_23.setVisible(true);lyr_csa_assigned_to_ASAN_24.setVisible(true);lyr_csa_assigned_to_ARIC_25.setVisible(true);lyr_csa_assigned_to_ACAM_26.setVisible(true);
var layersList = [lyr_GooglecnSatellite_0,lyr_OSMStandard_1,lyr_csa_assigned_to_WROB_2,lyr_csa_assigned_to_WKUH_3,lyr_csa_assigned_to_WALL_4,lyr_csa_assigned_to_THAR_5,lyr_csa_assigned_to_REDM_6,lyr_csa_assigned_to_PCHR_7,lyr_csa_assigned_to_MOKE_8,lyr_csa_assigned_to_KMAN_9,lyr_csa_assigned_to_JSAF_10,lyr_csa_assigned_to_JGRZ_11,lyr_csa_assigned_to_JFOR_12,lyr_csa_assigned_to_JFEA_13,lyr_csa_assigned_to_JDUS_14,lyr_csa_assigned_to_FULT_15,lyr_csa_assigned_to_DSTO_16,lyr_csa_assigned_to_DSAF_17,lyr_csa_assigned_to_DCRO_18,lyr_csa_assigned_to_CAMA_19,lyr_csa_assigned_to_BHAS_20,lyr_csa_assigned_to_AWIS_21,lyr_csa_assigned_to_ASHA_22,lyr_csa_assigned_to_ASCH_23,lyr_csa_assigned_to_ASAN_24,lyr_csa_assigned_to_ARIC_25,lyr_csa_assigned_to_ACAM_26];
lyr_csa_assigned_to_WROB_2.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_WKUH_3.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_WALL_4.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_THAR_5.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_REDM_6.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_PCHR_7.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_MOKE_8.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_KMAN_9.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_JSAF_10.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_JGRZ_11.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_JFOR_12.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_JFEA_13.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_JDUS_14.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_FULT_15.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_DSTO_16.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_DSAF_17.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_DCRO_18.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_CAMA_19.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_BHAS_20.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_AWIS_21.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_ASHA_22.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_ASCH_23.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_ASAN_24.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_ARIC_25.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_ACAM_26.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'userid': 'userid', 'id_inspection_trade': 'id_inspection_trade', 'datecreate': 'datecreate', 'csa_id': 'csa_id', 'csm_caseno': 'csm_caseno', 'csa_assigned_to': 'csa_assigned_to', 'block': 'block', 'lot': 'lot', });
lyr_csa_assigned_to_WROB_2.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_WKUH_3.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_WALL_4.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_THAR_5.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_REDM_6.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_PCHR_7.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_MOKE_8.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_KMAN_9.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_JSAF_10.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_JGRZ_11.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_JFOR_12.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_JFEA_13.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_JDUS_14.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_FULT_15.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_DSTO_16.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_DSAF_17.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_DCRO_18.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_CAMA_19.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_BHAS_20.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_AWIS_21.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_ASHA_22.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_ASCH_23.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_ASAN_24.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_ARIC_25.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_ACAM_26.set('fieldImages', {'fid': '', 'ogc_fid': '', 'objectid': '', 'userid': '', 'id_inspection_trade': '', 'datecreate': '', 'csa_id': '', 'csm_caseno': '', 'csa_assigned_to': '', 'block': '', 'lot': '', });
lyr_csa_assigned_to_WROB_2.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_WKUH_3.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_WALL_4.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_THAR_5.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_REDM_6.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_PCHR_7.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_MOKE_8.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_KMAN_9.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_JSAF_10.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_JGRZ_11.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_JFOR_12.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_JFEA_13.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_JDUS_14.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_FULT_15.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_DSTO_16.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_DSAF_17.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_DCRO_18.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_CAMA_19.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_BHAS_20.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_AWIS_21.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_ASHA_22.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_ASCH_23.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_ASAN_24.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_ARIC_25.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_ACAM_26.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'userid': 'no label', 'id_inspection_trade': 'no label', 'datecreate': 'no label', 'csa_id': 'no label', 'csm_caseno': 'no label', 'csa_assigned_to': 'no label', 'block': 'no label', 'lot': 'no label', });
lyr_csa_assigned_to_ACAM_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_maska_kraju_1 = new ol.format.GeoJSON();
var features_maska_kraju_1 = format_maska_kraju_1.readFeatures(json_maska_kraju_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_maska_kraju_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_maska_kraju_1.addFeatures(features_maska_kraju_1);
var lyr_maska_kraju_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_maska_kraju_1, 
                style: style_maska_kraju_1,
                popuplayertitle: "maska_kraju",
                interactive: false,
                title: '<img src="styles/legend/maska_kraju_1.png" /> maska_kraju'
            });
var format_strefyochronywzarzadzieLP_2 = new ol.format.GeoJSON();
var features_strefyochronywzarzadzieLP_2 = format_strefyochronywzarzadzieLP_2.readFeatures(json_strefyochronywzarzadzieLP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strefyochronywzarzadzieLP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strefyochronywzarzadzieLP_2.addFeatures(features_strefyochronywzarzadzieLP_2);
var lyr_strefyochronywzarzadzieLP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strefyochronywzarzadzieLP_2, 
                style: style_strefyochronywzarzadzieLP_2,
                popuplayertitle: "strefy ochrony w zarzadzie LP",
                interactive: false,
    title: 'strefy ochrony w zarzadzie LP<br />\
    <img src="styles/legend/strefyochronywzarzadzieLP_2_0.png" /> strefa 4<br />\
    <img src="styles/legend/strefyochronywzarzadzieLP_2_1.png" /> strefa 3<br />\
    <img src="styles/legend/strefyochronywzarzadzieLP_2_2.png" /> strefa 2<br />\
    <img src="styles/legend/strefyochronywzarzadzieLP_2_3.png" /> strefa 1<br />\
    <img src="styles/legend/strefyochronywzarzadzieLP_2_4.png" /> otulina<br />'
        });
var format_wydzieleniaLPwgstrefochrony_3 = new ol.format.GeoJSON();
var features_wydzieleniaLPwgstrefochrony_3 = format_wydzieleniaLPwgstrefochrony_3.readFeatures(json_wydzieleniaLPwgstrefochrony_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wydzieleniaLPwgstrefochrony_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wydzieleniaLPwgstrefochrony_3.addFeatures(features_wydzieleniaLPwgstrefochrony_3);
var lyr_wydzieleniaLPwgstrefochrony_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wydzieleniaLPwgstrefochrony_3, 
                style: style_wydzieleniaLPwgstrefochrony_3,
                popuplayertitle: "wydzielenia LP wg stref ochrony",
                interactive: true,
    title: 'wydzielenia LP wg stref ochrony<br />\
    <img src="styles/legend/wydzieleniaLPwgstrefochrony_3_0.png" /> strefa 4<br />\
    <img src="styles/legend/wydzieleniaLPwgstrefochrony_3_1.png" /> pozostałe strefy<br />'
        });
var format_strefa4do3propozycjaPracowni_4 = new ol.format.GeoJSON();
var features_strefa4do3propozycjaPracowni_4 = format_strefa4do3propozycjaPracowni_4.readFeatures(json_strefa4do3propozycjaPracowni_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strefa4do3propozycjaPracowni_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strefa4do3propozycjaPracowni_4.addFeatures(features_strefa4do3propozycjaPracowni_4);
var lyr_strefa4do3propozycjaPracowni_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strefa4do3propozycjaPracowni_4, 
                style: style_strefa4do3propozycjaPracowni_4,
                popuplayertitle: "strefa4do3 - propozycja Pracowni",
                interactive: false,
                title: '<img src="styles/legend/strefa4do3propozycjaPracowni_4.png" /> strefa4do3 - propozycja Pracowni'
            });
var format_strefa4dstanyponadstuletnie_5 = new ol.format.GeoJSON();
var features_strefa4dstanyponadstuletnie_5 = format_strefa4dstanyponadstuletnie_5.readFeatures(json_strefa4dstanyponadstuletnie_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strefa4dstanyponadstuletnie_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strefa4dstanyponadstuletnie_5.addFeatures(features_strefa4dstanyponadstuletnie_5);
var lyr_strefa4dstanyponadstuletnie_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strefa4dstanyponadstuletnie_5, 
                style: style_strefa4dstanyponadstuletnie_5,
                popuplayertitle: "strefa4 - dstany ponadstuletnie",
                interactive: false,
                title: '<img src="styles/legend/strefa4dstanyponadstuletnie_5.png" /> strefa4 - dstany ponadstuletnie'
            });
var format_strefa4do3propozycjaLP_6 = new ol.format.GeoJSON();
var features_strefa4do3propozycjaLP_6 = format_strefa4do3propozycjaLP_6.readFeatures(json_strefa4do3propozycjaLP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strefa4do3propozycjaLP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strefa4do3propozycjaLP_6.addFeatures(features_strefa4do3propozycjaLP_6);
var lyr_strefa4do3propozycjaLP_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strefa4do3propozycjaLP_6, 
                style: style_strefa4do3propozycjaLP_6,
                popuplayertitle: "strefa4do3 - propozycja LP",
                interactive: false,
                title: '<img src="styles/legend/strefa4do3propozycjaLP_6.png" /> strefa4do3 - propozycja LP'
            });
var format_granicapastwa_7 = new ol.format.GeoJSON();
var features_granicapastwa_7 = format_granicapastwa_7.readFeatures(json_granicapastwa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_granicapastwa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_granicapastwa_7.addFeatures(features_granicapastwa_7);
var lyr_granicapastwa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_granicapastwa_7, 
                style: style_granicapastwa_7,
                popuplayertitle: "granica państwa",
                interactive: false,
                title: '<img src="styles/legend/granicapastwa_7.png" /> granica państwa'
            });
var group_wydzieleniadoprzesuniciadostrefy3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "wydzielenia do przesunięcia do strefy 3"});
var group_PB_shp_20240316 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "PB_shp_20240316"});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_maska_kraju_1.setVisible(true);lyr_strefyochronywzarzadzieLP_2.setVisible(false);lyr_wydzieleniaLPwgstrefochrony_3.setVisible(true);lyr_strefa4do3propozycjaPracowni_4.setVisible(true);lyr_strefa4dstanyponadstuletnie_5.setVisible(true);lyr_strefa4do3propozycjaLP_6.setVisible(true);lyr_granicapastwa_7.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_maska_kraju_1,lyr_strefyochronywzarzadzieLP_2,lyr_wydzieleniaLPwgstrefochrony_3,lyr_strefa4do3propozycjaPracowni_4,lyr_strefa4dstanyponadstuletnie_5,lyr_strefa4do3propozycjaLP_6,lyr_granicapastwa_7];
lyr_maska_kraju_1.set('fieldAliases', {'id': 'id', });
lyr_strefyochronywzarzadzieLP_2.set('fieldAliases', {'a_i_num': 'a_i_num', 'adr_for': 'adr_for', 'area_type': 'area_type', 'site_type': 'site_type', 'silvicult': 'silvicult', 'forest_fun': 'forest_fun', 'stand_stru': 'stand_stru', 'rotat_age': 'rotat_age', 'sub_area': 'sub_area', 'prot_categ': 'prot_categ', 'species_cd': 'species_cd', 'part_cd': 'part_cd', 'spec_age': 'spec_age', 'a_year': 'a_year', 'layer': 'layer', 'path': 'path', 'nr_strefy': 'nr_strefy', 'strefa': 'strefa', 'pow_ha': 'pow_ha', 'nr_old': 'nr_old', '_area_type_cd': '_area_type_cd', '_site_type_cd': '_site_type_cd', '_moisture_cd': '_moisture_cd', '_degradation_cd': '_degradation_cd', '_soil_subtype_cd': '_soil_subtype_cd', '_plant_comm_cd': '_plant_comm_cd', '_stand_struct_cd': '_stand_struct_cd', '_forest_func_cd': '_forest_func_cd', '_silviculture_cd': '_silviculture_cd', '_rotation_age': '_rotation_age', '_sub_area': '_sub_area', '_veg_cover_cd': '_veg_cover_cd', '_damage_degree': '_damage_degree', '_cause_cd': '_cause_cd', '_density_cd': '_density_cd', '_mixture_cd': '_mixture_cd', '_standdensity_index': '_standdensity_index', '_tree_stock_cd': '_tree_stock_cd', '_st_rank_order_act': '_st_rank_order_act', '_storey_cd': '_storey_cd', '_prot_site_cd': '_prot_site_cd', '_prot_site_state': '_prot_site_state', });
lyr_wydzieleniaLPwgstrefochrony_3.set('fieldAliases', {'a_i_num': 'a_i_num', 'adr_for': 'adr_for', 'area_type': 'area_type', 'site_type': 'site_type', 'silvicult': 'silvicult', 'forest_fun': 'forest_fun', 'stand_stru': 'stand_stru', 'rotat_age': 'rotat_age', 'sub_area': 'sub_area', 'prot_categ': 'prot_categ', 'species_cd': 'species_cd', 'part_cd': 'part_cd', 'spec_age': 'spec_age', 'a_year': 'a_year', 'layer': 'layer', 'path': 'path', 'nr_strefy': 'nr_strefy', 'strefa': 'strefa', 'pow_ha': 'pow_ha', 'nr_old': 'nr_old', '_area_type_cd': '_area_type_cd', '_site_type_cd': '_site_type_cd', '_moisture_cd': '_moisture_cd', '_degradation_cd': '_degradation_cd', '_soil_subtype_cd': '_soil_subtype_cd', '_plant_comm_cd': '_plant_comm_cd', '_stand_struct_cd': '_stand_struct_cd', '_forest_func_cd': '_forest_func_cd', '_silviculture_cd': '_silviculture_cd', '_rotation_age': '_rotation_age', '_sub_area': '_sub_area', '_veg_cover_cd': '_veg_cover_cd', '_damage_degree': '_damage_degree', '_cause_cd': '_cause_cd', '_density_cd': '_density_cd', '_mixture_cd': '_mixture_cd', '_standdensity_index': '_standdensity_index', '_tree_stock_cd': '_tree_stock_cd', '_st_rank_order_act': '_st_rank_order_act', '_storey_cd': '_storey_cd', '_prot_site_cd': '_prot_site_cd', '_prot_site_state': '_prot_site_state', });
lyr_strefa4do3propozycjaPracowni_4.set('fieldAliases', {'a_i_num': 'a_i_num', 'adr_for': 'adr_for', 'area_type': 'area_type', 'site_type': 'site_type', 'silvicult': 'silvicult', 'forest_fun': 'forest_fun', 'stand_stru': 'stand_stru', 'rotat_age': 'rotat_age', 'sub_area': 'sub_area', 'prot_categ': 'prot_categ', 'species_cd': 'species_cd', 'part_cd': 'part_cd', 'spec_age': 'spec_age', 'a_year': 'a_year', 'layer': 'layer', 'path': 'path', 'nr_strefy': 'nr_strefy', 'strefa': 'strefa', 'pow_ha': 'pow_ha', 'nr_old': 'nr_old', '_area_type_cd': '_area_type_cd', '_site_type_cd': '_site_type_cd', '_moisture_cd': '_moisture_cd', '_degradation_cd': '_degradation_cd', '_soil_subtype_cd': '_soil_subtype_cd', '_plant_comm_cd': '_plant_comm_cd', '_stand_struct_cd': '_stand_struct_cd', '_forest_func_cd': '_forest_func_cd', '_silviculture_cd': '_silviculture_cd', '_rotation_age': '_rotation_age', '_sub_area': '_sub_area', '_veg_cover_cd': '_veg_cover_cd', '_damage_degree': '_damage_degree', '_cause_cd': '_cause_cd', '_density_cd': '_density_cd', '_mixture_cd': '_mixture_cd', '_standdensity_index': '_standdensity_index', '_tree_stock_cd': '_tree_stock_cd', '_st_rank_order_act': '_st_rank_order_act', '_storey_cd': '_storey_cd', '_prot_site_cd': '_prot_site_cd', '_prot_site_state': '_prot_site_state', });
lyr_strefa4dstanyponadstuletnie_5.set('fieldAliases', {'a_i_num': 'a_i_num', 'adr_for': 'adr_for', 'area_type': 'area_type', 'site_type': 'site_type', 'silvicult': 'silvicult', 'forest_fun': 'forest_fun', 'stand_stru': 'stand_stru', 'rotat_age': 'rotat_age', 'sub_area': 'sub_area', 'prot_categ': 'prot_categ', 'species_cd': 'species_cd', 'part_cd': 'part_cd', 'spec_age': 'spec_age', 'a_year': 'a_year', 'layer': 'layer', 'path': 'path', 'nr_strefy': 'nr_strefy', 'strefa': 'strefa', 'pow_ha': 'pow_ha', });
lyr_strefa4do3propozycjaLP_6.set('fieldAliases', {'a_i_num': 'a_i_num', 'adr_for': 'adr_for', 'area_type': 'area_type', 'site_type': 'site_type', 'silvicult': 'silvicult', 'forest_fun': 'forest_fun', 'stand_stru': 'stand_stru', 'rotat_age': 'rotat_age', 'sub_area': 'sub_area', 'prot_categ': 'prot_categ', 'species_cd': 'species_cd', 'part_cd': 'part_cd', 'spec_age': 'spec_age', 'a_year': 'a_year', 'layer': 'layer', 'path': 'path', '_fid': '_fid', '_adr_for': '_adr_for', '_area_type': '_area_type', '_site_type': '_site_type', '_silvicult': '_silvicult', '_forest_fu': '_forest_fu', '_stand_str': '_stand_str', '_rotat_age': '_rotat_age', '_sub_area': '_sub_area', '_prot_cate': '_prot_cate', '_species_c': '_species_c', '_part_cd': '_part_cd', '_spec_age': '_spec_age', '_a_year': '_a_year', '_layer': '_layer', '_strefa_st': '_strefa_st', '_strefa_no': '_strefa_no', '_area_ha': '_area_ha', '_ins_name': '_ins_name', 'pow_ha': 'pow_ha', });
lyr_granicapastwa_7.set('fieldAliases', {'JPT_SJR_KO': 'JPT_SJR_KO', 'JPT_POWIER': 'JPT_POWIER', 'JPT_KOD_JE': 'JPT_KOD_JE', 'JPT_NAZWA_': 'JPT_NAZWA_', 'JPT_ORGAN_': 'JPT_ORGAN_', 'JPT_JOR_ID': 'JPT_JOR_ID', 'WERSJA_OD': 'WERSJA_OD', 'WERSJA_DO': 'WERSJA_DO', 'WAZNY_OD': 'WAZNY_OD', 'WAZNY_DO': 'WAZNY_DO', 'JPT_KOD__1': 'JPT_KOD__1', 'JPT_NAZWA1': 'JPT_NAZWA1', 'JPT_ORGAN1': 'JPT_ORGAN1', 'JPT_WAZNA_': 'JPT_WAZNA_', 'ID_BUFORA_': 'ID_BUFORA_', 'ID_BUFORA1': 'ID_BUFORA1', 'ID_TECHNIC': 'ID_TECHNIC', 'IIP_PRZEST': 'IIP_PRZEST', 'IIP_IDENTY': 'IIP_IDENTY', 'IIP_WERSJA': 'IIP_WERSJA', 'JPT_KJ_IIP': 'JPT_KJ_IIP', 'JPT_KJ_I_1': 'JPT_KJ_I_1', 'JPT_KJ_I_2': 'JPT_KJ_I_2', 'JPT_OPIS': 'JPT_OPIS', 'JPT_SPS_KO': 'JPT_SPS_KO', 'ID_BUFOR_1': 'ID_BUFOR_1', 'JPT_ID': 'JPT_ID', 'JPT_POWI_1': 'JPT_POWI_1', 'JPT_KJ_I_3': 'JPT_KJ_I_3', 'JPT_GEOMET': 'JPT_GEOMET', 'JPT_GEOM_1': 'JPT_GEOM_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_maska_kraju_1.set('fieldImages', {'id': 'TextEdit', });
lyr_strefyochronywzarzadzieLP_2.set('fieldImages', {'a_i_num': 'TextEdit', 'adr_for': 'TextEdit', 'area_type': 'TextEdit', 'site_type': 'TextEdit', 'silvicult': 'TextEdit', 'forest_fun': 'TextEdit', 'stand_stru': 'TextEdit', 'rotat_age': 'TextEdit', 'sub_area': 'TextEdit', 'prot_categ': 'TextEdit', 'species_cd': 'TextEdit', 'part_cd': 'TextEdit', 'spec_age': 'TextEdit', 'a_year': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'nr_strefy': 'Range', 'strefa': 'TextEdit', 'pow_ha': 'TextEdit', 'nr_old': '', '_area_type_cd': 'TextEdit', '_site_type_cd': 'TextEdit', '_moisture_cd': 'TextEdit', '_degradation_cd': 'TextEdit', '_soil_subtype_cd': 'TextEdit', '_plant_comm_cd': 'TextEdit', '_stand_struct_cd': 'TextEdit', '_forest_func_cd': 'TextEdit', '_silviculture_cd': 'TextEdit', '_rotation_age': 'TextEdit', '_sub_area': 'TextEdit', '_veg_cover_cd': 'TextEdit', '_damage_degree': 'Range', '_cause_cd': 'TextEdit', '_density_cd': 'TextEdit', '_mixture_cd': 'TextEdit', '_standdensity_index': 'TextEdit', '_tree_stock_cd': 'TextEdit', '_st_rank_order_act': 'Range', '_storey_cd': 'TextEdit', '_prot_site_cd': 'TextEdit', '_prot_site_state': 'TextEdit', });
lyr_wydzieleniaLPwgstrefochrony_3.set('fieldImages', {'a_i_num': 'TextEdit', 'adr_for': 'TextEdit', 'area_type': 'TextEdit', 'site_type': 'TextEdit', 'silvicult': 'TextEdit', 'forest_fun': 'TextEdit', 'stand_stru': 'TextEdit', 'rotat_age': 'TextEdit', 'sub_area': 'TextEdit', 'prot_categ': 'TextEdit', 'species_cd': 'TextEdit', 'part_cd': 'TextEdit', 'spec_age': 'TextEdit', 'a_year': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'nr_strefy': 'Range', 'strefa': 'TextEdit', 'pow_ha': 'TextEdit', 'nr_old': 'Range', '_area_type_cd': 'TextEdit', '_site_type_cd': 'TextEdit', '_moisture_cd': 'TextEdit', '_degradation_cd': 'TextEdit', '_soil_subtype_cd': 'TextEdit', '_plant_comm_cd': 'TextEdit', '_stand_struct_cd': 'TextEdit', '_forest_func_cd': 'TextEdit', '_silviculture_cd': 'TextEdit', '_rotation_age': 'TextEdit', '_sub_area': 'TextEdit', '_veg_cover_cd': 'TextEdit', '_damage_degree': 'Range', '_cause_cd': 'TextEdit', '_density_cd': 'TextEdit', '_mixture_cd': 'TextEdit', '_standdensity_index': 'TextEdit', '_tree_stock_cd': 'TextEdit', '_st_rank_order_act': 'Range', '_storey_cd': 'TextEdit', '_prot_site_cd': 'TextEdit', '_prot_site_state': 'TextEdit', });
lyr_strefa4do3propozycjaPracowni_4.set('fieldImages', {'a_i_num': 'TextEdit', 'adr_for': 'TextEdit', 'area_type': 'TextEdit', 'site_type': 'TextEdit', 'silvicult': 'TextEdit', 'forest_fun': 'TextEdit', 'stand_stru': 'TextEdit', 'rotat_age': 'TextEdit', 'sub_area': 'TextEdit', 'prot_categ': 'TextEdit', 'species_cd': 'TextEdit', 'part_cd': 'TextEdit', 'spec_age': 'TextEdit', 'a_year': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'nr_strefy': 'TextEdit', 'strefa': 'TextEdit', 'pow_ha': 'TextEdit', 'nr_old': 'TextEdit', '_area_type_cd': 'TextEdit', '_site_type_cd': 'TextEdit', '_moisture_cd': 'TextEdit', '_degradation_cd': 'TextEdit', '_soil_subtype_cd': 'TextEdit', '_plant_comm_cd': 'TextEdit', '_stand_struct_cd': 'TextEdit', '_forest_func_cd': 'TextEdit', '_silviculture_cd': 'TextEdit', '_rotation_age': 'TextEdit', '_sub_area': 'TextEdit', '_veg_cover_cd': 'TextEdit', '_damage_degree': 'TextEdit', '_cause_cd': 'TextEdit', '_density_cd': 'TextEdit', '_mixture_cd': 'TextEdit', '_standdensity_index': 'TextEdit', '_tree_stock_cd': 'TextEdit', '_st_rank_order_act': 'TextEdit', '_storey_cd': 'TextEdit', '_prot_site_cd': 'TextEdit', '_prot_site_state': 'TextEdit', });
lyr_strefa4dstanyponadstuletnie_5.set('fieldImages', {'a_i_num': 'TextEdit', 'adr_for': 'TextEdit', 'area_type': 'TextEdit', 'site_type': 'TextEdit', 'silvicult': 'TextEdit', 'forest_fun': 'TextEdit', 'stand_stru': 'TextEdit', 'rotat_age': 'TextEdit', 'sub_area': 'TextEdit', 'prot_categ': 'TextEdit', 'species_cd': 'TextEdit', 'part_cd': 'TextEdit', 'spec_age': 'TextEdit', 'a_year': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'nr_strefy': 'Range', 'strefa': 'TextEdit', 'pow_ha': 'TextEdit', });
lyr_strefa4do3propozycjaLP_6.set('fieldImages', {'a_i_num': 'TextEdit', 'adr_for': 'TextEdit', 'area_type': 'TextEdit', 'site_type': 'TextEdit', 'silvicult': 'TextEdit', 'forest_fun': 'TextEdit', 'stand_stru': 'TextEdit', 'rotat_age': 'TextEdit', 'sub_area': 'TextEdit', 'prot_categ': 'TextEdit', 'species_cd': 'TextEdit', 'part_cd': 'TextEdit', 'spec_age': 'TextEdit', 'a_year': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', '_fid': 'TextEdit', '_adr_for': 'TextEdit', '_area_type': 'TextEdit', '_site_type': 'TextEdit', '_silvicult': 'TextEdit', '_forest_fu': 'TextEdit', '_stand_str': 'TextEdit', '_rotat_age': 'Range', '_sub_area': 'TextEdit', '_prot_cate': 'TextEdit', '_species_c': 'TextEdit', '_part_cd': 'TextEdit', '_spec_age': 'TextEdit', '_a_year': 'TextEdit', '_layer': 'TextEdit', '_strefa_st': 'TextEdit', '_strefa_no': 'TextEdit', '_area_ha': 'TextEdit', '_ins_name': 'TextEdit', 'pow_ha': 'TextEdit', });
lyr_granicapastwa_7.set('fieldImages', {'JPT_SJR_KO': 'TextEdit', 'JPT_POWIER': 'TextEdit', 'JPT_KOD_JE': 'TextEdit', 'JPT_NAZWA_': 'TextEdit', 'JPT_ORGAN_': 'TextEdit', 'JPT_JOR_ID': 'Range', 'WERSJA_OD': 'DateTime', 'WERSJA_DO': 'DateTime', 'WAZNY_OD': 'DateTime', 'WAZNY_DO': 'DateTime', 'JPT_KOD__1': 'TextEdit', 'JPT_NAZWA1': 'TextEdit', 'JPT_ORGAN1': 'TextEdit', 'JPT_WAZNA_': 'TextEdit', 'ID_BUFORA_': 'TextEdit', 'ID_BUFORA1': 'TextEdit', 'ID_TECHNIC': 'Range', 'IIP_PRZEST': 'TextEdit', 'IIP_IDENTY': 'TextEdit', 'IIP_WERSJA': 'TextEdit', 'JPT_KJ_IIP': 'TextEdit', 'JPT_KJ_I_1': 'TextEdit', 'JPT_KJ_I_2': 'TextEdit', 'JPT_OPIS': 'TextEdit', 'JPT_SPS_KO': 'TextEdit', 'ID_BUFOR_1': 'Range', 'JPT_ID': 'Range', 'JPT_POWI_1': 'TextEdit', 'JPT_KJ_I_3': 'TextEdit', 'JPT_GEOMET': 'TextEdit', 'JPT_GEOM_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_maska_kraju_1.set('fieldLabels', {'id': 'no label', });
lyr_strefyochronywzarzadzieLP_2.set('fieldLabels', {'a_i_num': 'no label', 'adr_for': 'no label', 'area_type': 'no label', 'site_type': 'no label', 'silvicult': 'no label', 'forest_fun': 'no label', 'stand_stru': 'no label', 'rotat_age': 'no label', 'sub_area': 'no label', 'prot_categ': 'no label', 'species_cd': 'no label', 'part_cd': 'no label', 'spec_age': 'no label', 'a_year': 'no label', 'layer': 'no label', 'path': 'no label', 'nr_strefy': 'no label', 'strefa': 'no label', 'pow_ha': 'no label', 'nr_old': 'no label', '_area_type_cd': 'no label', '_site_type_cd': 'no label', '_moisture_cd': 'no label', '_degradation_cd': 'no label', '_soil_subtype_cd': 'no label', '_plant_comm_cd': 'no label', '_stand_struct_cd': 'no label', '_forest_func_cd': 'no label', '_silviculture_cd': 'no label', '_rotation_age': 'no label', '_sub_area': 'no label', '_veg_cover_cd': 'no label', '_damage_degree': 'no label', '_cause_cd': 'no label', '_density_cd': 'no label', '_mixture_cd': 'no label', '_standdensity_index': 'no label', '_tree_stock_cd': 'no label', '_st_rank_order_act': 'no label', '_storey_cd': 'no label', '_prot_site_cd': 'no label', '_prot_site_state': 'no label', });
lyr_wydzieleniaLPwgstrefochrony_3.set('fieldLabels', {'a_i_num': 'hidden field', 'adr_for': 'header label - always visible', 'area_type': 'header label - visible with data', 'site_type': 'header label - visible with data', 'silvicult': 'hidden field', 'forest_fun': 'header label - visible with data', 'stand_stru': 'hidden field', 'rotat_age': 'hidden field', 'sub_area': 'hidden field', 'prot_categ': 'hidden field', 'species_cd': 'header label - always visible', 'part_cd': 'header label - always visible', 'spec_age': 'header label - always visible', 'a_year': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'nr_strefy': 'hidden field', 'strefa': 'hidden field', 'pow_ha': 'hidden field', 'nr_old': 'header label - always visible', '_area_type_cd': 'hidden field', '_site_type_cd': 'hidden field', '_moisture_cd': 'hidden field', '_degradation_cd': 'header label - visible with data', '_soil_subtype_cd': 'hidden field', '_plant_comm_cd': 'header label - visible with data', '_stand_struct_cd': 'hidden field', '_forest_func_cd': 'header label - visible with data', '_silviculture_cd': 'hidden field', '_rotation_age': 'hidden field', '_sub_area': 'hidden field', '_veg_cover_cd': 'header label - visible with data', '_damage_degree': 'hidden field', '_cause_cd': 'hidden field', '_density_cd': 'header label - visible with data', '_mixture_cd': 'header label - visible with data', '_standdensity_index': 'header label - visible with data', '_tree_stock_cd': 'hidden field', '_st_rank_order_act': 'hidden field', '_storey_cd': 'no label', '_prot_site_cd': 'header label - visible with data', '_prot_site_state': 'hidden field', });
lyr_strefa4do3propozycjaPracowni_4.set('fieldLabels', {'a_i_num': 'no label', 'adr_for': 'no label', 'area_type': 'no label', 'site_type': 'no label', 'silvicult': 'hidden field', 'forest_fun': 'no label', 'stand_stru': 'hidden field', 'rotat_age': 'hidden field', 'sub_area': 'hidden field', 'prot_categ': 'hidden field', 'species_cd': 'inline label - visible with data', 'part_cd': 'inline label - visible with data', 'spec_age': 'inline label - visible with data', 'a_year': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'nr_strefy': 'hidden field', 'strefa': 'hidden field', 'pow_ha': 'hidden field', 'nr_old': 'no label', '_area_type_cd': 'hidden field', '_site_type_cd': 'hidden field', '_moisture_cd': 'hidden field', '_degradation_cd': 'inline label - visible with data', '_soil_subtype_cd': 'hidden field', '_plant_comm_cd': 'inline label - always visible', '_stand_struct_cd': 'hidden field', '_forest_func_cd': 'hidden field', '_silviculture_cd': 'hidden field', '_rotation_age': 'hidden field', '_sub_area': 'hidden field', '_veg_cover_cd': 'inline label - visible with data', '_damage_degree': 'inline label - always visible', '_cause_cd': 'inline label - always visible', '_density_cd': 'inline label - always visible', '_mixture_cd': 'inline label - always visible', '_standdensity_index': 'inline label - always visible', '_tree_stock_cd': 'hidden field', '_st_rank_order_act': 'hidden field', '_storey_cd': 'hidden field', '_prot_site_cd': 'inline label - always visible', '_prot_site_state': 'inline label - always visible', });
lyr_strefa4dstanyponadstuletnie_5.set('fieldLabels', {'a_i_num': 'no label', 'adr_for': 'header label - always visible', 'area_type': 'no label', 'site_type': 'no label', 'silvicult': 'no label', 'forest_fun': 'no label', 'stand_stru': 'no label', 'rotat_age': 'no label', 'sub_area': 'no label', 'prot_categ': 'no label', 'species_cd': 'no label', 'part_cd': 'no label', 'spec_age': 'no label', 'a_year': 'no label', 'layer': 'no label', 'path': 'no label', 'nr_strefy': 'no label', 'strefa': 'no label', 'pow_ha': 'no label', });
lyr_strefa4do3propozycjaLP_6.set('fieldLabels', {'a_i_num': 'no label', 'adr_for': 'header label - always visible', 'area_type': 'no label', 'site_type': 'no label', 'silvicult': 'no label', 'forest_fun': 'no label', 'stand_stru': 'no label', 'rotat_age': 'no label', 'sub_area': 'no label', 'prot_categ': 'no label', 'species_cd': 'no label', 'part_cd': 'no label', 'spec_age': 'no label', 'a_year': 'no label', 'layer': 'no label', 'path': 'no label', '_fid': 'no label', '_adr_for': 'no label', '_area_type': 'no label', '_site_type': 'no label', '_silvicult': 'no label', '_forest_fu': 'no label', '_stand_str': 'no label', '_rotat_age': 'no label', '_sub_area': 'no label', '_prot_cate': 'no label', '_species_c': 'no label', '_part_cd': 'no label', '_spec_age': 'no label', '_a_year': 'no label', '_layer': 'no label', '_strefa_st': 'no label', '_strefa_no': 'no label', '_area_ha': 'no label', '_ins_name': 'no label', 'pow_ha': 'no label', });
lyr_granicapastwa_7.set('fieldLabels', {'JPT_SJR_KO': 'no label', 'JPT_POWIER': 'no label', 'JPT_KOD_JE': 'no label', 'JPT_NAZWA_': 'no label', 'JPT_ORGAN_': 'no label', 'JPT_JOR_ID': 'no label', 'WERSJA_OD': 'no label', 'WERSJA_DO': 'no label', 'WAZNY_OD': 'no label', 'WAZNY_DO': 'no label', 'JPT_KOD__1': 'no label', 'JPT_NAZWA1': 'no label', 'JPT_ORGAN1': 'no label', 'JPT_WAZNA_': 'no label', 'ID_BUFORA_': 'no label', 'ID_BUFORA1': 'no label', 'ID_TECHNIC': 'no label', 'IIP_PRZEST': 'no label', 'IIP_IDENTY': 'no label', 'IIP_WERSJA': 'no label', 'JPT_KJ_IIP': 'no label', 'JPT_KJ_I_1': 'no label', 'JPT_KJ_I_2': 'no label', 'JPT_OPIS': 'no label', 'JPT_SPS_KO': 'no label', 'ID_BUFOR_1': 'no label', 'JPT_ID': 'no label', 'JPT_POWI_1': 'no label', 'JPT_KJ_I_3': 'no label', 'JPT_GEOMET': 'no label', 'JPT_GEOM_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_granicapastwa_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var SpeedoKingDB = (function () {
  var db ={
    "vw": {
      "speedos": [
        { "image": "images/vw_speedo_002.JPG", "name": "Bug 55-60" },
        { "image": "images/vw_speedo_003.JPG", "name": "Bug 61-62" },
        { "image": "images/vw_speedo_004.JPG", "name": "Bug 63-67" },
        { "image": "images/vw_speedo_005.JPG", "name": "Bug 63-67 Km" },
        { "image": "images/vw_speedo_006.JPG", "name": "Bug 68" },
        { "image": "images/vw_speedo_007.JPG", "name": "Bug 69-70" },
        { "image": "images/vw_speedo_008.JPG", "name": "Bug 71-72" },
        { "image": "images/vw_speedo_009.JPG", "name": "Bug 72-73" },
        { "image": "images/vw_speedo_010.JPG", "name": "Bug 74-78" },
        { "image": "images/vw_speedo_011.JPG", "name": "Bus 56-60" },
        { "image": "images/vw_speedo_012.JPG", "name": "Bus 61-62" },
        { "image": "images/vw_speedo_013.JPG", "name": "Bus 63-67" },
        { "image": "images/vw_speedo_014.JPG", "name": "Bus Early Bay Window" },
        { "image": "images/vw_speedo_015.JPG", "name": "Type 3 Red Needle 63-64" },
        { "image": "images/vw_speedo_016.JPG", "name": "Type 3 63-64" },
        { "image": "images/vw_speedo_018.JPG", "name": "Karmann Ghia 56-59" },
        { "image": "images/vw_speedo_019.JPG", "name": "Karman Ghia 60" }
      ],
      "odometers": [
        { "image": "images/vw_odometer_020.JPG", "name": "BUG 64-67" },
        { "image": "images/vw_odometer_021.JPG", "name": "BUS 55-60" },
        { "image": "images/vw_odometer_023.JPG", "name": "BUS 64-67 Red Hawaiian" },
        { "image": "images/vw_odometer_024.JPG", "name": "BUS 63-67" },
        { "image": "images/vw_odometer_025.JPG", "name": "TYPE 3" },
        { "image": "images/vw_odometer_027.JPG", "name": "BUS/BUG TRIP KNOB" },
        { "image": "images/vw_odometer_028.JPG", "name": "BUS/BUG TRIP KNOB" }
      ]
    },
    "vespa": {
      "speedos": {
        "nos": [
          { "image": "images/vespa_speedo_nos_vnb.jpg", "name": "VNB N.O.S. Speedo" },
          { "image": "images/vespa_speedo_nos_vna.jpg", "name": "VNA N.O.S. Speedo" },
          { "image": "images/vespa_speedo_nos_vb1.jpg", "name": "VB1 N.O.S. Speedo" },
          { "image": "images/vespa_speedo_nos_vs1_vs3.jpg", "name": "VS1 - VS3 N.O.S. Speedo" },
          { "image": "images/vespa_speedo_nos_vbb1.jpg", "name": "VBB1 N.O.S. Speedo" },
          { "image": "images/vespa_speedo_nos_cev_80mph.jpg", "name": "CEV 80 Mph N.O.S. Speedo" },
          { "image": "images/vespa_speedo_nos_european_50_special.jpg", "name": "European 50 Special N.O.S. Speedo" },
          { "image": "images/vespa_speedo_nos_vse.jpg", "name": "VSE N.O.S. Speedo" }
        ],
        "restored": [
          { "image": "images/vespa_speedo_restored_vba.jpg", "name": "VBA Restored Speedo" },
          { "image": "images/vespa_speedo_restored_v5a_v9a_mph.jpg", "name": "V5A, V9A Mph Restored Speedo" },
          { "image": "images/vespa_speedo_restored_custom_clear.jpg", "name": "Custom Clear Restored Speedo" },
          { "image": "images/vespa_speedo_restored_vma_90ss.jpg", "name": "VMA-90ss Restored Speedo" },
          { "image": "images/vespa_speedo_restored_vsd_vma_vbc.jpg", "name": "VSD-VMA-VBC Restored Speedo" },
          { "image": "images/vespa_speedo_restored_vse.jpg", "name": "VSE Restored Speedo" },
          { "image": "images/vespa_speedo_restored_vnb_clear.jpg", "name": "VNB Clear Restored Speedo" }
        ],
      },
      "faceplates": {
        "grimstead": [
          { "image": "images/vespa_faceplate_grimstead_hurricane.jpg", "name": "Eddy Grimstead Hurricane Special" }
        ],
        "mph": [
          { "image": "images/vespa_faceplate_mph_vl3.jpg", "name": "VL3" },
          { "image": "images/vespa_faceplate_mph_vb1.jpg", "name": "VB1" },
          { "image": "images/vespa_faceplate_mph_vs4.jpg", "name": "VS4 mph" },
          { "image": "images/vespa_faceplate_mph_vna.jpg", "name": "VNA" },
          { "image": "images/vespa_faceplate_mph_vnb.jpg", "name": "VNB" },
          { "image": "images/vespa_faceplate_mph_vnb_allstate.jpg", "name": "VNB Allstate" },
          { "image": "images/vespa_faceplate_mph_vnb_clear.jpg", "name": "VNB Clear" },
          { "image": "images/vespa_faceplate_mph_vba.jpg", "name": "VBA" },
          { "image": "images/vespa_faceplate_mph_vs5_early_vsb.jpg", "name": "VS-5 Early VSB" },
          { "image": "images/vespa_faceplate_mph_vbb.jpg", "name": "VBB" },
          { "image": "images/vespa_faceplate_mph_vgl.jpg", "name": "VGL" },
          { "image": "images/vespa_faceplate_mph_vsb_vsc.jpg", "name": "VSB-VSC" },
          { "image": "images/vespa_faceplate_mph_v5a_v9a.jpg", "name": "V5A / V9A" },
          { "image": "images/vespa_faceplate_mph_60s_vma_90ss.jpg", "name": "60's VMA-90ss" },
          { "image": "images/vespa_faceplate_mph_70s_vma_vbc_vsd.jpg", "name": "70's VMA-VBC-VSD" },
          { "image": "images/vespa_faceplate_mph_vse_early.jpg", "name": "VSE early" },
          { "image": "images/vespa_faceplate_mph_vse_late.jpg", "name": "VSE late" }
        ],
        "km": [
          { "image": "images/vespa_faceplate_km_vl3.jpg", "name": "VL3" },
          { "image": "images/vespa_faceplate_km_vb1.jpg", "name": "VB1" },
          { "image": "images/vespa_faceplate_km_vs4.jpg", "name": "VS4 mph" },
          { "image": "images/vespa_faceplate_km_vna.jpg", "name": "VNA" },
          { "image": "images/vespa_faceplate_km_vnb.jpg", "name": "VNB" },
          { "image": "images/vespa_faceplate_km_vba.jpg", "name": "VBA" },
          { "image": "images/vespa_faceplate_km_vs5_early_vsb.jpg", "name": "VS-5 Early VSB" },
          { "image": "images/vespa_faceplate_km_vbb.jpg", "name": "VBB" },
          { "image": "images/vespa_faceplate_km_vgl_sprint.jpg", "name": "VGL-Sprint" },
          { "image": "images/vespa_faceplate_km_vsb_vsc.jpg", "name": "VSB-VSC" },
          { "image": "images/vespa_faceplate_km_v5a_v9a.jpg", "name": "V5A / V9A" },
          { "image": "images/vespa_faceplate_km_60s_100_kmh.jpg", "name": "60's 100 km/h" },
          { "image": "images/vespa_faceplate_km_60s_vma_90ss.jpg", "name": "60's VMA-90ss" },
          { "image": "images/vespa_faceplate_km_70s_vma.jpg", "name": "70's VMA" },
          { "image": "images/vespa_faceplate_km_vse.jpg", "name": "VSE" },
          { "image": "images/vespa_faceplate_km_vsx.jpg", "name": "VSX" }
        ],
        "novelty": [
          { "image": "images/vespa_faceplate_novelty_p_series_white.jpg", "name": "P-Series White" },
          { "image": "images/vespa_faceplate_novelty_p_series_clear.jpg", "name": "P-Series Clear" },
          { "image": "images/vespa_faceplate_novelty_p_series_abstract_hawaiian.jpg", "name": "P-Series Abstract Hawaiian" },
          { "image": "images/vespa_faceplate_novelty_p_series_blue_hawaiian.jpg", "name": "P-Series Blue Hawaiian" },
          { "image": "images/vespa_faceplate_novelty_p_series_carbon_fibre.jpg", "name": "P-Series Carbon Fibre" },
          { "image": "images/vespa_faceplate_novelty_p_series_olive_hawaiian.jpg", "name": "P-Series Olive Hawaiian" },
          { "image": "images/vespa_faceplate_novelty_p_series_tie_dye.jpg", "name": "P-Series Tie Dye" },
          { "image": "images/vespa_faceplate_novelty_p_series_red_hawaiian.jpg", "name": "P-Series Red Hawaiian" },
          { "image": "images/vespa_faceplate_novelty_p_series_stars.jpg", "name": "P-Series Stars" },
          { "image": "images/vespa_faceplate_novelty_p_series_wood_grain.jpg", "name": "P-Series Wood Grain" }
        ]
      },
      "blg": [
        { "image": "images/vespa_bezel_vn_vl.jpg", "name": "VN-VL bezel" },
        { "image": "images/vespa_bezel_vs1-4_vb1.jpg", "name": "VS1-4 VB1 Bezel" },
        { "image": "images/vespa_bezel_vna_vnb.jpg", "name": "VNA-VNB Bezel" },
        { "image": "images/vespa_bezel_clamshell.jpg", "name": "Clamshell Bezel" },
        { "image": "images/vespa_bezel_70s.jpg", "name": "70's Bezel" },
        { "image": "images/vespa_bezel_p_series_black.jpg", "name": "P Series Bezel Black" },
        { "image": "images/vespa_bezel_p_series_chrome.jpg", "name": "P Series Bezel Chrome" },
        { "image": "images/vespa_lenses_50s.jpg", "name": "50's Lenses" },
        { "image": "images/vespa_lenses_60s.jpg", "name": "60's Lenses" },
        { "image": "images/vespa_lenses_70s_80s.jpg", "name": "70's and 80's Lenses" },
        { "image": "images/vespa_gaskets_50s.jpg", "name": "50's Gaskets" },
        { "image": "images/vespa_gaskets_60s.jpg", "name": "60's Gaskets" },
        { "image": "images/vespa_gasket_70s.jpg", "name": "70's Gasket" },
        { "image": "images/vespa_gasket_vsx.jpg", "name": "VSX Gasket" }
      ]
    },
    "lambretta": {
      "speedos": {
        "new": [
          { "image": "images/lambretta_speedo_new_mph_li125_li150_ser_1_2.png", "name": "Series I/II LI 125 & 150 Km" },
          { "image": "images/lambretta_speedo_new_mph_ser_1_2_tv175.png", "name": "Series I/II TV 175 Mph" },
          { "image": "images/lambretta_speedo_viewupsidedown_ser_1_2_li_tv.png", "name": "Series I/II LI/TV bottom view" },
          { "image": "images/lambretta_speedo_new_mph_li125.png", "name": "Series III LI 125 Mph" },
          { "image": "images/lambretta_speedo_new_km_li150.png", "name": "Series III LI 150 Km" },
          { "image": "images/lambretta_speedo_new_mph_li150.png", "name": "Series III LI 150 Mph" },
          { "image": "images/lambretta_speedo_new_km_tv175.png", "name": "Series III TV 175 Km" },
          { "image": "images/lambretta_speedo_new_mph_tv175.png", "name": "Series III TV 175 Mph" },
          { "image": "images/lambretta_speedo_new_modified_mph_jrange.png", "name": "J Range Modified Mph" },
          { "image": "images/lambretta_speedo_new_mph_sx150.png", "name": "Series III SX 150 Mph" },
          { "image": "images/lambretta_speedo_new_mph_sx200.png", "name": "Series III SX 200 Mph" },
          { "image": "images/lambretta_speedo_new_bottomview_series3_li_tv_sx_gp.png", "name": "Series III LI/TV/SX/GP bottom view " },
          { "image": "images/lambretta_speedo_novelty_mph_sx150_stars.png", "name": "Series III SX 150 Mph novelty star face" },
          { "image": "images/lambretta_speedo_novelty_mph_sx150_clearface.png", "name": "Series III SX 150 Mph novelty clear face" },
          { "image": "images/lambretta_speedo_novelty_mph_sx200_clearface.png", "name": "Series III SX 200 Mph novelty clear face" },
          { "image": "images/lambretta_speedo_novelty_mph_sx200_carbonfiber.png", "name": "Series III SX 200 Mph novelty carbon fiber face" },
          { "image": "images/lambretta_speedo_novelty_mph_gp_200_carbonfiber.png", "name": "GP 200 Mph novelty carbon fiber face" }
        ],
        "nos": [
          { "image": "images/lambretta_speedo_nos_km_ld.jpg", "name": "LD Km" },
          { "image": "images/lambretta_speedo_nos_mph_ld_mkI_II.png", "name": "LD mk I/II Mph" },
          { "image": "images/lambretta_speedo_nos_km_j_range.jpg", "name": "J Range Speedo Km" }
        ],
        "restored": [
          { "image": "images/lambretta_speedo_restored_series_i_and_ii_tv175.jpg", "name": "Series I and II TV 175 Restored Speedo" },
          { "image": "images/lambretta_speedo_restored_series_iii_li125.jpg", "name": "LI 125 Series III Restored Speedo" },
          { "image": "images/lambretta_speedo_restored_series_iii_sx150.jpg", "name": "SX 150 Restored Speedo" },
          { "image": "images/lambretta_speedo_restored_series_iii_sx-gp200_clear.jpg", "name": "SX-GP 200 Clear Restored Speedo" },
          { "image": "images/lambretta_speedo_restored_series_iii_gp200_wood_grain.jpg", "name": "GP 200 Wood Grain Restored Speedo" } 
        ]
      },
      "faceplates": {
        "mph": [
          { "image": "images/lambretta_faceplates_mph_series_i_ld_mki_mkii.jpg", "name": "LD MKI and MKII" },
          { "image": "images/lambretta_faceplates_mph_series_i_ld_mkiii.jpg", "name": "LD MKIII" },
          { "image": "images/lambretta_faceplates_mph_series_i_and_ii_li125_li150.jpg", "name": "Series I and II LI 125, 150" },
          { "image": "images/lambretta_faceplates_mph_series_i_and_ii_tv175.jpg", "name": "Series I and II TV 175" },
          { "image": "images/lambretta_faceplates_mph_series_iii_li126.jpg", "name": "Series III LI 125" },
          { "image": "images/lambretta_faceplates_mph_series_iii_li150.jpg", "name": "Series III LI 150" },
          { "image": "images/lambretta_faceplates_mph_series_iii_tv175.jpg", "name": "Series III TV 175" },
          { "image": "images/lambretta_faceplates_mph_series_iii_sx-tv200.jpg", "name": "SX-TV 200" },
          { "image": "images/lambretta_faceplates_mph_series_iii_gp200.jpg", "name": "GP 200" }
        ],
        "km": [
          { "image": "images/lambretta_faceplates_km_series_i_ld_mki_mkii.jpg", "name": "LD MKI and MKII" },
          { "image": "images/lambretta_faceplates_km_cento.jpg", "name": "Cento" }
        ],
        "novelty": [
          { "image": "images/lambretta_faceplates_novelty_series_iii_sx-gp_top.jpg", "name": "SX-GP Top Face Plates" },
          { "image": "images/lambretta_faceplates_novelty_series_iii_sx-gp_70mph_original.jpg", "name": "SX-GP 70 MPH Original" },
          { "image": "images/lambretta_faceplates_novelty_series_iii_sx-gp_70mph_clear.jpg", "name": "SX-GP 70 MPH Clear" },
          { "image": "images/lambretta_faceplates_novelty_series_iii_sx-gp_70mph_abstract_hawaiian.jpg", "name": "SX-GP 70 MPH Abstract Hawaiian" },
          { "image": "images/lambretta_faceplates_novelty_series_iii_sx-gp_70mph_blue_hawaiian.jpg", "name": "SX-GP 70 MPH Blue Hawaiian" },
          { "image": "images/lambretta_faceplates_novelty_series_iii_sx-gp_70mph_carbon_fibre.jpg", "name": "SX-GP 70 MPH Carbon Fibre" },
          { "image": "images/lambretta_faceplates_novelty_series_iii_sx-gp_70mph_confetti.jpg", "name": "SX-GP 70 MPH Confetti" },
          { "image": "images/lambretta_faceplates_novelty_series_iii_sx-gp_70mph_olive_hawaiian.jpg", "name": "SX-GP 70 MPH Olive Hawaiian" },
          { "image": "images/lambretta_faceplates_novelty_series_iii_sx-gp_70mph_stars.jpg", "name": "SX-GP 70 MPH Stars" },
          { "image": "images/lambretta_faceplates_novelty_series_iii_sx-gp_70mph_tie_dye.jpg", "name": "SX-GP 70 MPH Tie Dye" },
          { "image": "images/lambretta_faceplates_novelty_series_iii_sx-gp_70mph_wood_grain.jpg", "name": "SX-GP 70 MPH Wood Grain" },
          { "image": "images/lambretta_faceplates_novelty_series_iii_sx-gp_90mph_original.jpg", "name": "SX-GP 90 MPH Original" },
          { "image": "images/lambretta_faceplates_novelty_series_iii_sx-gp_90mph_clear.jpg", "name": "SX-GP 90 MPH Clear" },
          { "image": "images/lambretta_faceplates_novelty_series_iii_sx-gp_90mph_abstract_hawaiian.jpg", "name": "SX-GP 90 MPH Abstract Hawaiian" },
          { "image": "images/lambretta_faceplates_novelty_series_iii_sx-gp_90mph_blue_hawaiian.jpg", "name": "SX-GP 90 MPH Blue Hawaiian" },
          { "image": "images/lambretta_faceplates_novelty_series_iii_sx-gp_90mph_carbon_fibre.jpg", "name": "SX-GP 90 MPH Carbon Fibre" },
          { "image": "images/lambretta_faceplates_novelty_series_iii_sx-gp_90mph_confetti.jpg", "name": "SX-GP 90 MPH Confetti" },
          { "image": "images/lambretta_faceplates_novelty_series_iii_sx-gp_90mph_olive_hawaiian.jpg", "name": "SX-GP 90 MPH Olive Hawaiian" },
          { "image": "images/lambretta_faceplates_novelty_series_iii_sx-gp_90mph_stars.jpg", "name": "SX-GP 90 MPH Stars" },
          { "image": "images/lambretta_faceplates_novelty_series_iii_sx-gp_90mph_tie_dye.jpg", "name": "SX-GP 90 MPH Tie Dye" },
          { "image": "images/lambretta_faceplates_novelty_series_iii_sx-gp_90mph_wood_grain.jpg", "name": "SX-GP 90 MPH Wood Grain" } 
        ]
      },
      "blg": [
          { "image": "images/lambretta_bezel_series_i_ld_mki_mkii.jpg", "name": "LD Mk I and II Bezel" },
          { "image": "images/lambretta_bezel_series_i_ld_mkiii.jpg", "name": "LD Mk III Bezel" },
          { "image": "images/lambretta_lens_series_i_ld_mki_mkii.jpg", "name": "LD Mk I and II Lens" },
          { "image": "images/lambretta_lens_series_i_ld_mkiii.jpg", "name": "LD Mk III Lens" },
          { "image": "images/lambretta_lens_series_i.jpg", "name": "Series 1 Lens" },
          { "image": "images/lambretta_lens_series_ii.jpg", "name": "Series 2 Lens" },
          { "image": "images/lambretta_lens_series_iii.jpg", "name": "Series 3 Lens" },
          { "image": "images/lambretta_gasket_series_i_ld_mki_mkii.jpg", "name": "LD Mk I and II Gasket" },
          { "image": "images/lambretta_gasket_series_i_ld_mk_iii.jpg", "name": "LD Mk III Gasket" },
          { "image": "images/lambretta_gasket_series_i-ii.jpg", "name": "Series 1 and 2 Gasket" },
          { "image": "images/lambretta_gasket_series_iii.jpg", "name": "Series 3 Gasket" }
      ]
    }
  };
  return db;
}());

<?php 
include 'section-header.php'; 
require_once 'Mobile_Detect.php';
$detect = new Mobile_Detect;

?>

<div class="stars one"></div>
<div class="stars two"></div>
<div class="stars three"></div>
<div class="stars four"></div>

  <div id="dom">
    <div id="portfolio" class="transition-fade-slide-in">

      <?php
        // handbreak WEB > Discord Nitro 720 || VIDEO > Placebo || RF > 35

        $item_count = 1;

        $itemArgs = [
          'name' => 'Running',
          'desc' => 'javascript animation',
          'link' => 'dennishelbig.com/running',
          'url' => 'https://dennishelbig.com/running/',
          'mp4' => 'running.mp4',
          'autoplay' => 'autoplay',
          'preload' => 'preload'
        ];
        @include 'section-item.php';

        $itemArgs = [
          'name' => 'Dystoptimal',
          'desc' => 'animations &<br>web-development',
          'link' => 'dystoptimal.com',
          'url' => 'https://dystoptimal.com/',
          'mp4' => 'dystoptimal.mp4',
          'preload' => 'preload'
        ];
        @include 'section-item.php';

        $itemArgs = [
          'name' => 'EnviaM Vision 2030',
          'desc' => 'javascript animations',
          'link' => 'enviam-gruppe2030.de/wimmelbild',
          'url' => 'https://www.enviam-gruppe2030.de/wimmelbild/',
          'mp4' => 'enviam.mp4',
          // 'preload' => 'preload'
        ];

        @include 'section-item.php';
       
        $itemArgs = [
          'name' => 'ONIMO studios',
          'desc' => 'animations &<br>web-development',
          'link' => 'onimo-studios.com',
          'url' => 'https://onimo-studios.com/',
          'mp4' => 'onimo.mp4',
        ];
        @include 'section-item.php';

        $itemArgs = [
          'name' => 'Schloss Eybesfeld',
          'desc' => 'animations &<br>web-development',
          'link' => 'schloss-eybesfeld.at',
          'url' => 'https://schloss-eybesfeld.at/',
          'mp4' => 'eybesfeld.mp4',
        ];
        @include 'section-item.php';

        $itemArgs = [
          'name' => 'Hannes Sabathi',
          'desc' => 'animations &<br>web-development',
          'link' => 'hannessabathi.at',
          'url' => 'http://hannessabathi.at/',
          'mp4' => 'hannessabathi.mp4',
        ];
        @include 'section-item.php';

        $itemArgs = [
          'name' => 'Lin Wen Teh',
          'desc' => 'animations &<br>web-development',
          'link' => 'linwenteh.com',
          'url' => 'https://linwenteh.com/',
          'mp4' => 'linwenteh.mp4',
        ];
        @include 'section-item.php';

        $itemArgs = [
          'name' => 'Dr. Eva Lang',
          'desc' => 'animations &<br>web-development',
          'link' => 'zahnarzt-drlang.at',
          'url' => 'https://zahnarzt-drlang.at/',
          'mp4' => 'zahnarztdrlang.mp4',
        ];
        @include 'section-item.php';

        $itemArgs = [
          'name' => 'thequietnow',
          'desc' => 'animations &<br>web-development',
          'link' => 'thequietnow.com',
          'url' => 'https://thequietnow.com/',
          'mp4' => 'thequietnow.mp4',
        ];
        @include 'section-item.php';

        $itemArgs = [
          'name' => 'the end',
          'desc' => 'logo design &<br>javascript animation',
          'link' => 'dennishelbig.com/theend',
          'url' => 'https://dennishelbig.com/theend',
          'mp4' => 'theend.mp4',
        ];
        @include 'section-item.php';
      ?>
      <div id="foot-note">
        <div class="foot-note-inner">
          <span>copyright Dennis Helbig <?php echo date('Y'); ?></span>
          <button id="imprint-button">imprint</button>
          <button id="privacy-button">data privacy</button>
        </div>
      </div>
    </div>
  </div> 

<?php include 'section-footer.php'; ?>
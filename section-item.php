<?php //  Test  // ?>

<div class="row">
  <div class="row-inner">
    <?php $item_count++; ?>

    <div class="browser">
      <div class="browser-container">
        <div class="taskbar">
          
          <button class="zoom">
            <div class="enlarge"></div>
            <div class="shrink"></div>
          </button>

          <div class="address-bar">
            <div class="progress-bar"></div>
            <span><?php echo $itemArgs['link']; ?></span>
          </div>

          <a target="_blank" href="<?php echo $itemArgs['url']; ?>">
            <div class="taskbar-left">
            <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
                <path class="st0" d="M24.9,94.7c0-23.3,0-46.6,0-69.9c8.7,0,17.4,0,26.2,0c0,2.9,0,5.7,0,8.7c-5.8,0-11.6,0-17.4,0
                  c0,17.5,0,35,0,52.6c17.5,0,35,0,52.5,0c0-5.8,0-11.6,0-17.4c2.9,0,5.8,0,8.7,0c0,8.7,0,17.4,0,26.2C71.6,94.7,48.3,94.7,24.9,94.7
                  z"/>
                <path class="st0" d="M63.9,64.1c-2.8-2.8-5.6-5.6-8.3-8.3c6.2-6.2,12.4-12.4,18.6-18.6C70.1,33.1,66,29,61.9,24.9
                  c0,0,0.1-0.1,0.1-0.1c11,0,21.9,0,32.9,0c0,11,0,21.9,0,32.8c-4.1-4.1-8.1-8.1-12.2-12.2C76.3,51.7,70.1,57.9,63.9,64.1z"/>
            </svg>
            </div>
          </a>

        </div>


        <div class="browser-content">
          <div class="loading"></div>

          <video width="320" height="240" <?php echo $itemArgs['autoplay'] ?> <?php echo $itemArgs['preload']; ?> autoplay muted playsinline loop>
            <?php 
            // is mobile
            if( $detect->isMobile() && !$detect->isTablet() ){ ?>
              <source src="./video/mp4small/<?php echo $itemArgs['mp4']; ?>" type="video/mp4">Please use a real browser to see videos. How did you survive until <?php echo date('Y'); ?>
            <?php }else{ ?>
              <source src="./video/mp4/<?php echo $itemArgs['mp4']; ?>" type="video/mp4">Please use a real browser to see videos. How did you survive until <?php echo date('Y'); ?>
            <?php } ?>

          </video>
        </div>
      </div> 
    </div>  

    
    <div class="info-text">
      <div class="text-container">
        <h1><?php echo $itemArgs['name']; ?></h1>
        <h2 class="item-desc"><?php echo $itemArgs['desc']; ?></h2>
      </div>
    </div>  
  </div> 
</div>

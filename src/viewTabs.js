import './viewTabs.css';

(function () {

   // const filePath = "../../SiteAssets/docLibTabs.css"
  // 
    
    //Character used at the beginning of view names to delineate 'Admin' views
    const ADMIN_TAB_PREFIX = 'Ω';
    
    var overrideContext = {};
    
    overrideContext.OnPostRender = (ctx) => {

        console.log('executing OnPostRender in viewTabs.js');
    
            //Add style sheet to the document
       /*     const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = filePath;
            document.head.appendChild(link);
        */
        
        //Create a webpart id string
        const webPartId = ctx.view.replace(/[{}]/g,'').toLowerCase();
    
        /* Determine if the view name begins with character of interest and if so add 
        * the 'nshq-admin' class to appropriate tag
        */
        if (ctx.viewTitle.startsWith(ADMIN_TAB_PREFIX))
            document.querySelector('[webpartid="' + webPartId + '"]').classList.add("nshq-admin");
    
        //Grab all of the view header tabs
        //let tabs = document.querySelectorAll('[class*="ms-pivotControl-surfacedOpt"');
        let tabs = document.querySelectorAll('[class*="ms-pivotControl-surfacedOpt-selected"');
    
        //Iterate over all tabs and add 'nshq-admin' class to any that begin with character of interest
        tabs.forEach(item => {
    
            if (item.innerHTML.startsWith(ADMIN_TAB_PREFIX))
                item.classList.add("nshq-admin");
        })
    
    
    }
    
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(overrideContext);
    
    })();
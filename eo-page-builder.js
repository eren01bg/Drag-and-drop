
const mainContainer = document.querySelector('.eo-page-container');
let componentCurrentlyBeingEdited = null;
let widgets = [];
defineNewWidget('Heading', 'fas fa-heading', 'text', {
    content: {
        innerText: {
            type: 'textarea',
            label: 'Text',
            value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            options: null
        },
        textAlign: {
            type: 'dropdown',
            label: 'Text Align',
            value: 'left',
            options: ['left', 'center', 'right', 'justify']
        },
    },
    style: {
        fontSize: {
            type: 'number',
            label: 'Font Size',
            value: '16',
            options: null
        },
        fontFamily: {
            type: 'dropdown',
            label: 'Font Family',
            value: 'Arial',
            options: ['Arial', 'Times New Roman', 'Courier New', 'Verdana', 'Georgia', 'Palatino', 'Garamond', 'Bookman', 'Comic Sans MS', 'Trebuchet MS', 'Arial Black', 'Impact']
        },
        color: {
            type: 'color',
            label: 'Color',
            value: '#000000',
            options: null
        }
    }
});

defineNewWidget('Image', 'fas fa-image', 'image', {
    content: {
        src: {
            type: 'text',
            label: 'Image Source',
            value: '',
            options: null
        }
    },
    style: {
        width: {
            type: 'text',
            label: 'Width',
            value: '200',
            options: null
        },
        height: {
            type: 'text',
            label: 'Height',
            value: '300',
            options: null
        }
    }
});

defineNewWidget('Container', 'fas fa-boxes', 'container', {
    content: {
        width: {
            type: 'text',
            label: 'Width',
            value: '100%',
            options: null
        },
        minHeight: {
            type: 'text',
            label: 'Min Height',
            value: '100px',
            options: null
        },
        flexDirection: {
            type: 'dropdown',
            label: 'Flex Direction',
            value: 'row',
            options: ['row', 'column', 'row-reverse', 'column-reverse']
        },
        justifyContent: {
            type: 'dropdown',
            label: 'Justify Content',
            value: 'flex-start',
            options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']
        },
        alignItems: {
            type: 'dropdown',
            label: 'Align Items',
            value: 'flex-start',
            options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']
        },
        flexWrap: {
            type: 'dropdown',
            label: 'Flex Wrap',
            value: 'nowrap',
            options: ['nowrap', 'wrap', 'wrap-reverse']
        },
        gap: {
            type: 'text',
            label: 'Gap',
            value: '0',
            options: null
        },
    },
    style: {
        backgroundColor: {
            type: 'color',
            label: 'Background Color',
            value: '#ffffff',
            options: null
        },
        border: {
            type: 'text',
            label: 'Border',
            value: 'none',
            options: null
        },
        borderRadius: {
            type: 'text',
            label: 'Border Radius',
            value: '0',
            options: null
        },
        padding: {
            type: 'text',
            label: 'Padding',
            value: '0',
            options: null
        },
        margin: {
            type: 'text',
            label: 'Margin',
            value: '0',
            options: null
        },
    }
});

displayWidgets();
const componentSettings = {
    text: {
        content: {
            innerText: {
                type: 'textarea',
                label: 'Text',
                value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                options: null
            },
            textAlign: {
                type: 'dropdown',
                label: 'Text Align',
                value: 'left',
                options: ['left', 'center', 'right', 'justify']
            }
        },
        style: {
            fontSize: {
                type: 'number',
                label: 'Font Size',
                value: '16',
                options: null
            },
            fontFamily: {
                type: 'dropdown',
                label: 'Font Family',
                value: 'Arial',
                options: ['Arial', 'Times New Roman', 'Courier New', 'Verdana', 'Georgia', 'Palatino', 'Garamond', 'Bookman', 'Comic Sans MS', 'Trebuchet MS', 'Arial Black', 'Impact']
            },
            color: {
                type: 'color',
                label: 'Color',
                value: '#000000',
                options: null
            }
        }
    },
    image: {
        content: {
            src: {
                type: 'text',
                label: 'Image Source',
                value: '',
                options: null
            }
        },
        style: {
            width: {
                type: 'text',
                label: 'Width',
                value: '200',
                options: null
            },
            height: {
                type: 'text',
                label: 'Height',
                value: '300',
                options: null
            }
        }
    },
    container: {
        content: {
            width: {
                type: 'text',
                label: 'Width',
                value: '100%',
                options: null
            },
            minHeight: {
                type: 'text',
                label: 'Min Height',
                value: '100px',
                options: null
            },
            flexDirection: {
                type: 'dropdown',
                label: 'Flex Direction',
                value: 'row',
                options: ['row', 'column', 'row-reverse', 'column-reverse']
            },
            justifyContent: {
                type: 'dropdown',
                label: 'Justify Content',
                value: 'flex-start',
                options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']
            },
            alignItems: {
                type: 'dropdown',
                label: 'Align Items',
                value: 'flex-start',
                options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']
            },
            flexWrap: {
                type: 'dropdown',
                label: 'Flex Wrap',
                value: 'nowrap',
                options: ['nowrap', 'wrap', 'wrap-reverse']
            },
            gap: {
                type: 'text',
                label: 'Gap',
                value: '0',
                options: null
            },
        },
        style: {
            backgroundColor: {
                type: 'color',
                label: 'Background Color',
                value: '#ffffff',
                options: null
            },
            border: {
                type: 'text',
                label: 'Border',
                value: 'none',
                options: null
            },
            borderRadius: {
                type: 'text',
                label: 'Border Radius',
                value: '0',
                options: null
            },
            padding: {
                type: 'text',
                label: 'Padding',
                value: '0',
                options: null
            },
            margin: {
                type: 'text',
                label: 'Margin',
                value: '0',
                options: null
            },
        }
    },
}



document.addEventListener('click', (e) => {

    
    if(e.target.matches('.add-first-btn') || e.target.matches('[data-action="add-container"]')) {
        
        
        const container = addContainer();
        mainContainer.appendChild(container);
        checkIfAddFirstButtonNeeded();

    }

    if(e.target.matches('[data-action="remove"]')) {
        
        const container = e.target.closest('.eo-container');
        removeContainer(container);
        
    }

    if(e.target.matches('.eo-container-controls [data-action="drag"]')) {
        const container = e.target.closest('.eo-container');
        componentCurrentlyBeingEdited = container.querySelector('.eo-container-content');
        setSidebarView('settings');
        buildSettingsMenu(container);
    }

    if(e.target.matches('.edit-component-btn')) {
        const component = e.target.closest('.eo-component');
        componentCurrentlyBeingEdited = component.querySelector('.eo-component-content *');
        setSidebarView('settings');
        buildSettingsMenu(component);
    }
})

document.addEventListener('mousedown', (e) => {
    
    if(e.target.matches('button[data-action="drag"]')) {
        e.target.closest('.eo-container').setAttribute('draggable', true);
    }

    if(e.target.matches('button.edit-component-btn')) {
        e.target.closest('.eo-component').setAttribute('draggable', true);
    }

})

document.addEventListener('mouseup', (e) => {
    
    if(e.target.matches('button[data-action="drag"]')) {
        e.target.closest('.eo-container').setAttribute('draggable', false);
    }

    if(e.target.matches('button.edit-component-btn')) {
        e.target.closest('.eo-component').setAttribute('draggable', false);
    }

})

document.addEventListener('dragstart', (e) => {

    document.body.classList.add('drag-in-process');
    if(e.target.matches('.eo-container')) {
        e.target.classList.add('dragging');
    }

    if(e.target.matches('.eo-component')) {
        e.target.classList.add('dragging');
    }

})

document.addEventListener('dragend', (e) => {
    
    document.body.classList.remove('drag-in-process');
    if(e.target.matches('.eo-container')) {
        e.target.classList.remove('dragging');
        e.target.setAttribute('draggable', false);
    }

    if(e.target.matches('.eo-component') || e.target.matches('.eo-container')) {
        e.target.classList.remove('dragging');
        e.target.setAttribute('draggable', false);
        e.target.closest('.eo-container').classList.remove('dragover');

        const containers = mainContainer.querySelectorAll('.eo-container');
        containers.forEach((container) => {
            checkIfContainerIsEmpty(container);
        })
        
    }

})

document.addEventListener('dragover', (e) => {

    const currentlyDragging = document.querySelector('.dragging');
    const isDraggingContainer = currentlyDragging.matches('.eo-container');
    const isDraggingComponent = currentlyDragging.matches('.eo-component');
    
    if(e.target.matches('.eo-page-container') && isDraggingContainer) {
        
        e.preventDefault();
        const containerBelow = findContainerBelow(e.clientY);

        if(!containerBelow) {
            mainContainer.appendChild(currentlyDragging);
        } else {
            mainContainer.insertBefore(currentlyDragging, containerBelow);
        }

    }

    if(e.target.matches('.eo-container') && isDraggingComponent) {
        
        e.preventDefault();
        const componentContainer = e.target.querySelector('.eo-container-content');
        const componentBelow = findComponentBelow(e.clientY, componentContainer);

        if(!componentBelow) {
            componentContainer.appendChild(currentlyDragging);
        } else {
            componentContainer.insertBefore(currentlyDragging, componentBelow);
        }

    }

    if (e.target.matches('.eo-container:not(.dragging)') && isDraggingContainer) {
        e.preventDefault();
        const componentContainer = e.target.querySelector('.eo-container-content');
        const containerBelow = findComponentBelow(e.clientY, componentContainer);
        
        if(!containerBelow) {
            componentContainer.appendChild(currentlyDragging);
        } else {
            componentContainer.insertBefore(currentlyDragging, containerBelow);
        }
    }
    

    if(e.target.matches('.eo-component-content') && (isDraggingComponent || isDraggingContainer)) {

        
        e.preventDefault();
        const componentBelow = e.target.closest('.eo-component');
        const componentContainer = componentBelow.closest('.eo-container-content');
        const isMovingLeft = e.clientX < e.target.getBoundingClientRect().left + e.target.getBoundingClientRect().width / 2;
        const isMovingRight = e.clientX > e.target.getBoundingClientRect().left + e.target.getBoundingClientRect().width / 2;

        
        if(isMovingLeft) {
            componentContainer.insertBefore(currentlyDragging, componentBelow);
        } else if(isMovingRight && componentBelow.nextSibling) {
            componentContainer.insertBefore(currentlyDragging, componentBelow.nextSibling);
        } else {
            componentContainer.appendChild(currentlyDragging);
        }


    }


})

document.addEventListener('dragenter', (e) => {

    const currentlyDragging = document.querySelector('.dragging');
    const isDraggingComponent = currentlyDragging.matches('.eo-component');

    if(e.target.matches('.eo-container') && isDraggingComponent) {
        e.target.classList.add('dragover');
    }
})

document.addEventListener('dragleave', (e) => {
    
    const currentlyDragging = document.querySelector('.dragging');
    const isDraggingComponent = currentlyDragging.matches('.eo-component');

    if(e.target.matches('.eo-container') && isDraggingComponent) {
        e.target.classList.remove('dragover');
    }

})

function addContainer() {
    const container = document.createElement('div');
    container.classList.add('eo-container', 'empty');
    container.setAttribute('data-id', getNewContainerId());
    container.setAttribute('data-type', 'container')

    container.innerHTML = `
        <div class="eo-container-controls">
            <button type="button" data-action="add-container"><i class="fas fa-plus"></i></button>
            <button type="button" data-action="drag"><i class="fas fa-arrows-alt"></i></button>
            <button type="button" data-action="remove"><i class="fas fa-trash"></i></button>
        </div>
        <div class="eo-container-content" data-id="${getNewContainerId()}">
        </div>
        <button type="button" class="add-component-btn"><i class="fas fa-plus"></i></button>
    `;

    return container;

}

function removeContainer(container) {
    const containerId = container.getAttribute('data-id');
    const containerToRemove = document.querySelector(`[data-id="${containerId}"]`);
    hideAndRemove(containerToRemove);
}

function checkIfAddFirstButtonNeeded() {
    const amountOfContainers = mainContainer.querySelectorAll('.eo-container').length;
    const addFirstButton = document.querySelector('.eo-page-add-first');

    if(amountOfContainers < 1 && addFirstButton) {
        show(addFirstButton);
    } else if(amountOfContainers >= 1 && addFirstButton) {
        hide(addFirstButton);
    } else {
        createAddFirstButton();
    }
}

function checkIfContainerIsEmpty(container) {

    const components = container.querySelectorAll('.eo-component');

    if(components.length < 1) {
        container.classList.add('empty');
    } else {
        container.classList.remove('empty');
    }

}

function getNewContainerId() {
    const containerId = mainContainer.querySelectorAll('.eo-container').length + 1;
    return containerId;
}

function hide(element, time = 500) {
    
    element.classList.add('hidden');
    setTimeout(() => {
        element.style.display = 'none';
    }, time);

}

function show(element, time = 500) {
    element.style.display = 'flex';
    setTimeout(() => {
        element.classList.remove('hidden');
    }, time);
}

function hideAndRemove(element) {
    element.classList.add('hidden');
    setTimeout(() => {
        element.remove();
        checkIfAddFirstButtonNeeded();
    }, 500);
}

function createAddFirstButton() {
    const addFirstContainer = document.createElement('div');
    addFirstContainer.classList.add('eo-page-add-first');
    addFirstContainer.innerHTML = `
        <button type="button" class="add-first-btn"><i class="fas fa-plus"></i></button>
    `;

    mainContainer.appendChild(addFirstContainer);
}

function findContainerBelow(mouseY) {
    const allContainers = mainContainer.querySelectorAll('.eo-container:not(.dragging)');

    let closestContainer = null;
    let closestOffset = Number.NEGATIVE_INFINITY;

    allContainers.forEach((container) => {
        const { top } = container.getBoundingClientRect();

        const offset = mouseY - top;

        if (offset < 0 && offset > closestOffset) {
            closestOffset = offset;
            closestContainer = container;
        }
    });

    return closestContainer;
}

const sidebar = document.querySelector('.eo-sidebar');
const sidebarHideBtn = document.querySelector('.eo-sidebar-hide-btn');
const sidebarShowBtn = document.querySelector('.eo-sidebar-show');

sidebarHideBtn.addEventListener('click', () => {
    hideSidebar();
})

sidebarShowBtn.addEventListener('click', () => {
    showSidebar();
})

function hideSidebar() {
    sidebar.classList.remove('show');
    sidebar.classList.add('hidden');
    sidebarShowBtn.style.display = 'flex';
}

function showSidebar() {
    sidebar.classList.remove('hidden');
    sidebar.classList.add('show');
    sidebarShowBtn.style.display = 'none';
}

function isSidebarHidden() {
    return sidebar.classList.contains('hidden');
}

// adding components

let selectedContainer = null;

function getFirstContainer() {
    return mainContainer.querySelector('.eo-container');
}

document.addEventListener('click', (e) => {

    if(e.target.matches('.add-component-btn') || e.target.matches('.eo-container')) {    
        const container = e.target.closest('.eo-container');
        selectedContainer = container;
        if(isSidebarHidden()) {
            showSidebar();
        }
        setSidebarView('elements');
    }


    if(e.target.matches('.element')) {
        const componentType = e.target.getAttribute('data-element');
        let containerToAppend = selectedContainer ? selectedContainer : getFirstContainer();
        
        if(componentType === 'container' && !selectedContainer) containerToAppend = null;

    
        if(!containerToAppend && componentType !== 'container') {
            containerToAppend = addContainer();
            mainContainer.appendChild(containerToAppend);
        } else if(componentType === 'container' && !containerToAppend) {
            mainContainer.appendChild(addComponent(componentType));
            return;
        } 
    
        let componentContainer = containerToAppend.querySelector('.eo-container-content');
        const component = addComponent(componentType);
        componentContainer.appendChild(component);
        containerToAppend.classList.remove('empty');
    }

})

function addComponent(type) {

    switch(type) {
        case 'text':
            return addTextComponent();
        case 'image':
            return addImageComponent();
        case 'container':
            return addContainer();
        default:
            return addTextComponent();
    }

}

function componentBoilerplate(type, content) {

    const component = document.createElement('div');
    component.classList.add('eo-component');
    component.setAttribute('data-type', type);
    component.innerHTML = `
        <div class="eo-component-content">
            ${content}
            <button type="button" class="edit-component-btn"><i class="fas fa-edit"></i></button>
        </div>
    `;

    return component;



}

function addTextComponent(htmlTag = 'h4') {

    const component = componentBoilerplate('text', `<${htmlTag}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</${htmlTag}>`);

    return component;

}

function addImageComponent() {
    
    const component = componentBoilerplate('image', `<img src="https://picsum.photos/200/300" alt="placeholder image">`);

    return component;

}

function findComponentBelow(mouseY, container) {
    const allComponents = container.querySelectorAll('.eo-container-content .eo-component:not(.dragging), .eo-container-content .eo-container:not(.dragging)');

    let closestComponent = null;
    let closestOffset = Number.NEGATIVE_INFINITY;

    allComponents.forEach((component) => {
        const { top } = component.getBoundingClientRect();

        const offset = mouseY - top;

        if (offset < 0 && offset > closestOffset) {
            closestOffset = offset;
            closestComponent = component;
        }
    });

    return closestComponent;
}

function getComponentType(component) {
    return component.getAttribute('data-type');
}

function buildSettingsMenu(component) {

    const componentType = getComponentType(component);

    switch(componentType) {
        case 'text':
            return buildTextSettingsMenu(component);
        case 'image':
            return buildImageSettingsMenu(component);
        case 'container':
            return buildContainerSettingsMenu(component);
        default:
            return buildTextSettingsMenu(component);
    }
}

function buildTextSettingsMenu(component) {

    const componentType = getComponentType(component);
    const componentSettings = getComponentSettings(componentType);
    
    // replace [tab] with the name of the tab we want to add the settings to
    const sidebarSettingsSelector = '.eo-sidebar-settings-tab-content#[tab]';

    if(componentSettings === null) {
        return;
    }

    const contentSettings = componentSettings.content;
    let contentSettingsHTML = '';

    const styleSettings = componentSettings.style;
    let styleSettingsHTML = '';

    Object.keys(contentSettings).forEach((settingAction) => {
        const setting = contentSettings[settingAction];
        const settingHTML = buildSetting(settingAction, setting, component);
        contentSettingsHTML += settingHTML;
    })

    Object.keys(styleSettings).forEach((settingAction) => {
        const setting = styleSettings[settingAction];
        const settingHTML = buildSetting(settingAction, setting, component);
        styleSettingsHTML += settingHTML;
    })


    const contentTab = sidebarSettingsSelector.replace('[tab]', 'content');
    const styleTab = sidebarSettingsSelector.replace('[tab]', 'style');

    document.querySelector(contentTab).innerHTML = contentSettingsHTML;
    document.querySelector(styleTab).innerHTML = styleSettingsHTML;

}

function buildImageSettingsMenu(component) {

    const componentType = getComponentType(component);
    const componentSettings = getComponentSettings(componentType);
    // replace [tab] with the name of the tab we want to add the settings to
    const sidebarSettingsSelector = '.eo-sidebar-settings-tab-content#[tab]';

    if(componentSettings === null) {
        return;
    }

    const contentSettings = componentSettings.content;
    let contentSettingsHTML = '';
    
    const styleSettings = componentSettings.style;
    let styleSettingsHTML = '';
    
    Object.keys(contentSettings).forEach((settingAction) => {
        const setting = contentSettings[settingAction];
        const settingHTML = buildSetting(settingAction, setting, component);
        contentSettingsHTML += settingHTML;
    })

    Object.keys(styleSettings).forEach((settingAction) => {
        const setting = styleSettings[settingAction];
        const settingHTML = buildSetting(settingAction, setting, component);
        styleSettingsHTML += settingHTML;
    })


    const contentTab = sidebarSettingsSelector.replace('[tab]', 'content');
    const styleTab = sidebarSettingsSelector.replace('[tab]', 'style');

    document.querySelector(contentTab).innerHTML = contentSettingsHTML;
    document.querySelector(styleTab).innerHTML = styleSettingsHTML;

}

function buildContainerSettingsMenu(component) {

    const componentType = getComponentType(component);
    const componentSettings = getComponentSettings(componentType);
    // replace [tab] with the name of the tab we want to add the settings to
    const sidebarSettingsSelector = '.eo-sidebar-settings-tab-content#[tab]';

    if(componentSettings === null) {
        return;
    }

    const contentSettings = componentSettings.content;
    let contentSettingsHTML = '';
    
    const styleSettings = componentSettings.style;
    let styleSettingsHTML = '';
    
    Object.keys(contentSettings).forEach((settingAction) => {
        const setting = contentSettings[settingAction];
        const settingHTML = buildSetting(settingAction, setting, component);
        contentSettingsHTML += settingHTML;
    })

    Object.keys(styleSettings).forEach((settingAction) => {
        const setting = styleSettings[settingAction];
        const settingHTML = buildSetting(settingAction, setting, component);
        styleSettingsHTML += settingHTML;
    })

    const contentTab = sidebarSettingsSelector.replace('[tab]', 'content');
    const styleTab = sidebarSettingsSelector.replace('[tab]', 'style');

    document.querySelector(contentTab).innerHTML = contentSettingsHTML;
    document.querySelector(styleTab).innerHTML = styleSettingsHTML;

}


  
function getComponentSettings(type) {
    return componentSettings[type] ? componentSettings[type] : null;
}

function buildSetting(settingAction, setting, component) {

    const settingType = setting.type;
    const settingLabel = setting.label;
    const settingValue = getComponentSettingValue(settingAction, component) ? getComponentSettingValue(settingAction, component) : setting.value;
    const settingOptions = setting.options; 

    switch(settingType) {
        case 'textarea':
            return buildTextareaSetting(settingAction, settingLabel, settingValue);
        case 'number':
            return buildNumberSetting(settingAction, settingLabel, settingValue);
        case 'dropdown':
            return buildDropdownSetting(settingAction, settingLabel, settingValue, settingOptions);
        case 'color':
            return buildColorSetting(settingAction, settingLabel, settingValue);
        default:
            return buildTextareaSetting(settingAction, settingLabel, settingValue);
    
    }

}

function getComponentSettingValue(settingAction, component) {

    const componentType = getComponentType(component);
    const componentData = componentType === 'container' ? component.querySelector('.eo-container-content') : component.querySelector('.eo-component-content *');

    switch(settingAction) {
        case 'innerText':
            return componentData.innerText;
        case 'fontSize':
            return componentData.style.fontSize.replace('px', '');
        case 'fontFamily':
            return componentData.style.fontFamily;
        case 'color':
            return componentData.style.color;
        case 'src':
            return componentData.getAttribute('src');
        case 'width':
            return componentData.style.width.replace('px', '');
        case 'height':
            return componentData.style.height.replace('px', '');
        case 'textAlign':
            return componentData.style.textAlign;
        case 'minHeight':
            return componentData.style.minHeight.replace('px', '');
        case 'flexDirection':
            return componentData.style.flexDirection;
        case 'justifyContent':
            return componentData.style.justifyContent;
        case 'alignItems':
            return componentData.style.alignItems;
        case 'flexWrap':
            return componentData.style.flexWrap;
        case 'gap':
            return componentData.style.gap.replace('px', '');
        case 'backgroundColor':
            return componentData.style.backgroundColor;
        case 'border':
            return componentData.style.border;
        case 'borderRadius':
            return componentData.style.borderRadius.replace('px', '');
        case 'padding':
            return componentData.style.padding.replace('px', '');
        case 'margin':
            return componentData.style.margin.replace('px', '');
        default:
            return null;
    }

}

function buildTextareaSetting(action, label, value) {

    return `
        <label for="textarea-${action}">${label}</label>
        <textarea name="textarea-${action}" id="textarea-${action}" data-setting-action="${action}">${value}</textarea>
    `;

}

function buildNumberSetting(action, label, value) {

    return `
        <label for="number-${action}">${label}</label>
        <input type="number" name="number-${action}" id="number-${action}" data-setting-action="${action}" value="${value}">
    `;

}

function buildDropdownSetting(action, label, value, options) {

    let optionsHTML = '';

    options.forEach((option) => {
        if(option === value) {
            optionsHTML += `<option value="${option}" selected>${option}</option>`;
            return;
        }
        optionsHTML += `<option value="${option}">${option}</option>`;
    })

    return `
        <label for="dropdown-${action}">${label}</label>
        <select name="dropdown-${action}" id="dropdown-${action}" data-setting-action="${action}">
            ${optionsHTML}
        </select>
    `;

}

function buildColorSetting(action, label, value) {

    return `
        <label for="color-${action}">${label}</label>
        <input type="color" name="color-${action}" id="color-${action}" data-setting-action="${action}" value="${rgbToHex(value)}">
    `;

}

function changeTab(tabId) {

    // get active tab content
    const activeTabs = document.querySelectorAll('.eo-sidebar-settings-tab-content.active');
    activeTabs.forEach((tab) => {
        tab.classList.remove('active');
    })


    // show the tab that was clicked
    const tabToShow = document.querySelector(`.eo-sidebar-settings-tab-content#${tabId}`);
    tabToShow.classList.add('active');
    // set the active tab
    const activeTabButton = document.querySelector('.eo-sidebar-settings-tab.active');
    activeTabButton.classList.remove('active');

    const tabToActivate = document.querySelector(`.eo-sidebar-settings-tab[data-tab="${tabId}"]`);
    tabToActivate.classList.add('active');

}


document.addEventListener('click', (e) => {
    
    if(e.target.matches('.eo-sidebar-settings-tab')) {
        const tab = e.target.getAttribute('data-tab');
        changeTab(tab);
    }

    if(e.target.matches('.eo-sidebar-go-back-btn')) {
        setSidebarView('elements');
        componentCurrentlyBeingEdited = null;
    }

})

function setSidebarView(view) {

    const sidebar = document.querySelector('.eo-sidebar');
    sidebar.setAttribute('data-view', view);

}

document.addEventListener('input', (e) => {
  
    const settingAction = e.target.getAttribute('data-setting-action');
    if(!settingAction) {
        return;
    }
    
    updateComponentSetting(settingAction, e.target);
    
    
})

function updateComponentSetting(settingAction, setting) {

    switch(settingAction) {
        case 'innerText':
            return updateInnerText(setting);
        case 'fontSize':
            return updateFontSize(setting);
        case 'fontFamily':
            return updateFontFamily(setting);
        case 'color':
            return updateColor(setting);
        case 'src':
            return updateSrc(setting);
        case 'width':
            return updateWidth(setting);
        case 'height':
            return updateHeight(setting);
        case 'textAlign':
            return updateTextAlign(setting);
        case 'minHeight':
            return updateMinHeight(setting);
        case 'flexDirection':
            return updateFlexDirection(setting);
        case 'justifyContent':
            return updateJustifyContent(setting);
        case 'alignItems':
            return updateAlignItems(setting);
        case 'flexWrap':
            return updateFlexWrap(setting);
        case 'gap':
            return updateGap(setting);
        case 'backgroundColor':
            return updateBackgroundColor(setting);
        case 'border':
            return updateBorder(setting);
        case 'borderRadius':
            return updateBorderRadius(setting);
        case 'padding':
            return updatePadding(setting);
        case 'margin':
            return updateMargin(setting);
        default:
            return;
    }

}

function updateInnerText(setting) {
    const value = setting.value;
    componentCurrentlyBeingEdited.innerText = value;
}

function updateFontSize(setting) {
    const value = setting.value;
    componentCurrentlyBeingEdited.style.fontSize = `${value}px`;
}

function updateFontFamily(setting) {
    const value = setting.value;
    componentCurrentlyBeingEdited.style.fontFamily = value;
}

function updateColor(setting) {
    const value = setting.value;
    componentCurrentlyBeingEdited.style.color = value;
}

function updateSrc(setting) {
    const value = setting.value;
    componentCurrentlyBeingEdited.setAttribute('src', value);
}

function updateWidth(setting) {
    const isCurrentElementContainer = componentCurrentlyBeingEdited.matches('.eo-container-content');
    const value = setting.value;
    if(isCurrentElementContainer) {
        if(value.includes('%')) {
            componentCurrentlyBeingEdited.parentElement.style.width = `${value}`;
        } else {
            componentCurrentlyBeingEdited.parentElement.style.width = `${value}px`;
        }
        return;
    } else {

        if(value.includes('%')) {
            componentCurrentlyBeingEdited.style.width = `${value}`;
        } else {
            componentCurrentlyBeingEdited.style.width = `${value}px`;
        }
    
    }

}



function updateTextAlign(setting) {
    const value = setting.value;
    componentCurrentlyBeingEdited.style.textAlign = value;
}

function updateHeight(setting) {
    const value = setting.value;
    componentCurrentlyBeingEdited.style.height = `${value}`;
}

function updateMinHeight(setting) {
    const isCurrentElementContainer = componentCurrentlyBeingEdited.matches('.eo-container-content');
    const value = setting.value;
    if(isCurrentElementContainer) {
        componentCurrentlyBeingEdited.parentElement.style.minHeight = `${value}`;
        return;
    } else {
        componentCurrentlyBeingEdited.style.minHeight = `${value}`;
    }
}

function updateFlexDirection(setting) {
    const value = setting.value;
    componentCurrentlyBeingEdited.style.flexDirection = value;
}

function updateJustifyContent(setting) {
    const value = setting.value;
    componentCurrentlyBeingEdited.style.justifyContent = value;
}

function updateAlignItems(setting) {
    const value = setting.value;
    componentCurrentlyBeingEdited.style.alignItems = value;
}

function updateFlexWrap(setting) {
    const value = setting.value;
    componentCurrentlyBeingEdited.style.flexWrap = value;
}

function updateGap(setting) {
    const value = setting.value;
    componentCurrentlyBeingEdited.style.gap = `${value}px`;
}

function updateBackgroundColor(setting) {
    const isCurrentElementContainer = componentCurrentlyBeingEdited.matches('.eo-container-content');
    const value = setting.value;
    if(isCurrentElementContainer) {
        componentCurrentlyBeingEdited.parentElement.style.backgroundColor = value;
        return;
    } else {
        componentCurrentlyBeingEdited.style.backgroundColor = value;
    }
}

function updateBorder(setting) {
    const isCurrentElementContainer = componentCurrentlyBeingEdited.matches('.eo-container-content');
    const value = setting.value;
    if(isCurrentElementContainer) {
        componentCurrentlyBeingEdited.parentElement.style.border = value;
        return;
    } else {
        componentCurrentlyBeingEdited.style.border = value;
    }
}

function updateBorderRadius(setting) {

    const isCurrentElementContainer = componentCurrentlyBeingEdited.matches('.eo-container-content');
    const value = setting.value;
    if(isCurrentElementContainer) {
        componentCurrentlyBeingEdited.parentElement.style.borderRadius = `${value}px`;
        return;
    } else {
        componentCurrentlyBeingEdited.style.borderRadius = `${value}px`;
    }

}

function updatePadding(setting) {
    const isCurrentElementContainer = componentCurrentlyBeingEdited.matches('.eo-container-content');
    const value = setting.value;
    if(isCurrentElementContainer) {
        componentCurrentlyBeingEdited.parentElement.style.padding = `${value}px`;
        return;
    } else {
        componentCurrentlyBeingEdited.style.padding = `${value}px`;
    }
}

function updateMargin(setting) {
    const isCurrentElementContainer = componentCurrentlyBeingEdited.matches('.eo-container-content');
    const value = setting.value;
    if(isCurrentElementContainer) {
        componentCurrentlyBeingEdited.parentElement.style.margin = `${value}px`;
        return;
    } else {
        componentCurrentlyBeingEdited.style.margin = `${value}px`;
    }
}

function adjustContainerControlsPosition() {
    const containerControls = document.querySelectorAll('.eo-container-controls');

    containerControls.forEach((controls) => {
        const rect = controls.getBoundingClientRect();

        // Check if the controls are out of the viewport
        if (rect.right > window.innerWidth || rect.bottom > window.innerHeight) {
            // Move to the right (0) and add 10 to the top position
            controls.style.right = '0';
            controls.style.top = `${parseFloat(controls.style.top) + 10}px`;
        }
    });
}




function rgbToHex(rgb) {
    const regex = /rgb\((\d+), (\d+), (\d+)\)/;
    const match = rgb.match(regex);

    if (!match) {
        return rgb; 
    }

    const r = parseInt(match[1]);
    const g = parseInt(match[2]);
    const b = parseInt(match[3]);

    const hex = `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;

    return hex;
}


function defineNewWidget(widgetName, widgetIcon, widgetType, widgetSettings) {
    widgets.push({
        name: widgetName,
        icon: widgetIcon,
        type: widgetType,
        settings: widgetSettings
    });
}

function getWidgets() {
    return widgets;
}

function getWidgetByName(widgetName) {
    return widgets.find(widget => widget.name === widgetName);
}

function getWidgetSettings(widgetName) {
    return widgets.find(widget => widget.name === widgetName).settings;
}

function displayWidgets() {
    
    const widgetsContainer = document.querySelector('.eo-sidebar .elements');
    const widgets = getWidgets();

    let widgetsHTML = '';

    widgets.forEach((widget) => {
        widgetsHTML += `
            <div class="element" data-element="${widget.type}">
                <i class="${widget.icon}"></i>
                <p>${widget.name}</p>
            </div>
        `;
    })  

    widgetsContainer.innerHTML = widgetsHTML;
}
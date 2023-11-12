
const mainContainer = document.querySelector('.eo-page-container');
let componentCurrentlyBeingEdited = null;
let widgets = [];
defineNewWidget('Heading', 'fas fa-heading', 'text', {
    content: {
        innerText: {
            type: 'textarea',
            label: 'Text',
            value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            options: null,
            group: 'content'
        },
        textAlign: {
            type: 'dropdown',
            label: 'Text Align',
            value: 'left',
            options: ['left', 'center', 'right', 'justify'],
            group: 'style'
        },
    },
    style: {
        fontSize: {
            type: 'number',
            label: 'Font Size',
            value: '16',
            options: null,
            group: 'style'
        },
        fontFamily: {
            type: 'dropdown',
            label: 'Font Family',
            value: 'Arial',
            options: ['Arial', 'Times New Roman', 'Courier New', 'Verdana', 'Georgia', 'Palatino', 'Garamond', 'Bookman', 'Comic Sans MS', 'Trebuchet MS', 'Arial Black', 'Impact'],
            group: 'style'
        },
        color: {
            type: 'color',
            label: 'Color',
            value: '#000000',
            options: null,
            group: 'style'
        }
    }
}, 'heading');

defineNewWidget('Image', 'fas fa-image', 'image', {
    content: {
        src: {
            type: 'text',
            label: 'Image Source',
            value: '',
            options: null,
            group: 'attribute'
        }
    },
    style: {
        width: {
            type: 'text',
            label: 'Width',
            value: '200',
            options: null,
            group: 'style',
        },
        height: {
            type: 'text',
            label: 'Height',
            value: '300',
            options: null,
            group: 'style'
        }
    }
}, 'image');

defineNewWidget('Container', 'fas fa-box', 'container', {
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
            options: null,
            group: 'style'
        },
        flexDirection: {
            type: 'dropdown',
            label: 'Flex Direction',
            value: 'row',
            options: ['row', 'column', 'row-reverse', 'column-reverse'],
            group: 'style'
        },
        justifyContent: {
            type: 'dropdown',
            label: 'Justify Content',
            value: 'flex-start',
            options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
            group: 'style'
        },
        alignItems: {
            type: 'dropdown',
            label: 'Align Items',
            value: 'flex-start',
            options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
            group: 'style'
        },
        flexWrap: {
            type: 'dropdown',
            label: 'Flex Wrap',
            value: 'nowrap',
            options: ['nowrap', 'wrap', 'wrap-reverse'],
            group: 'style'
        },
        gap: {
            type: 'text',
            label: 'Gap',
            value: '0',
            options: null,
            group: 'style'
        },
    },
    style: {
        backgroundColor: {
            type: 'color',
            label: 'Background Color',
            value: '#ffffff',
            options: null,
            group: 'style'
        },
        border: {
            type: 'text',
            label: 'Border',
            value: 'none',
            options: null,
            group: 'style'
        },
        borderRadius: {
            type: 'text',
            label: 'Border Radius',
            value: '0',
            options: null,
            group: 'style',
        },
        padding: {
            type: 'text',
            label: 'Padding',
            value: '0',
            options: null,
            group: 'style'
        },
        margin: {
            type: 'text',
            label: 'Margin',
            value: '0',
            options: null,
            group: 'style'
        },
    }
}, 'container');

defineNewWidget('Button', 'fas fa-link', 'button', {
    content: {
        innerText: {
            type: 'textarea',
            label: 'Text',
            value: 'Button',
            options: null,
            group: 'content'
        },
        textAlign: {
            type: 'dropdown',
            label: 'Text Align',
            value: 'left',
            options: ['left', 'center', 'right', 'justify'],
            group: 'style'
        },
    },
    style: {
        fontSize: {
            type: 'number',
            label: 'Font Size',
            value: '16',
            options: null,
            group: 'style'
        },
        fontFamily: {
            type: 'dropdown',
            label: 'Font Family',
            value: 'Arial',
            options: ['Arial', 'Times New Roman', 'Courier New', 'Verdana', 'Georgia', 'Palatino', 'Garamond', 'Bookman', 'Comic Sans MS', 'Trebuchet MS', 'Arial Black', 'Impact'],
            group: 'style'
        },
        color: {
            type: 'color',
            label: 'Color',
            value: '#000000',
            options: null,
            group: 'style'
        },
        backgroundColor: {
            type: 'color',
            label: 'Background Color',
            value: '#ffffff',
            options: null,
            group: 'style'
        },
        border: {
            type: 'text',
            label: 'Border',
            value: 'none',
            options: null,
            group: 'style'
        },
        borderRadius: {
            type: 'text',
            label: 'Border Radius',
            value: '0',
            options: null,
            group: 'style',
        },
        padding: {
            type: 'text',
            label: 'Padding',
            value: '0',
            options: null,
            group: 'style'
        },
        margin: {
            type: 'text',
            label: 'Margin',
            value: '0',
            options: null,
            group: 'style'
        },
    }
}, 'button');

const components = {
    'text': componentBoilerplate('heading', textComponentHTML()),
    'image': componentBoilerplate('image', imageComponentHTML()),
    'button': componentBoilerplate('button', buttonComponentHTML()),
}

displayWidgets();

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
        buildWidgetSettingsMenu(container);
    }

    if(e.target.matches('.edit-component-btn')) {
        const component = e.target.closest('.eo-component');
        componentCurrentlyBeingEdited = component.querySelector('.eo-component-content *');
        setSidebarView('settings');
        buildWidgetSettingsMenu(component);
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
            mainContainer.appendChild(addContainer());
            return;
        } 
    
        let componentContainer = containerToAppend.querySelector('.eo-container-content');
        const component = addComponent(componentType);
        componentContainer.appendChild(component);
        containerToAppend.classList.remove('empty');
    }

})

function addComponent(type) {

    const componentHTML = components[type];
    const component = document.createElement('div');
    component.classList.add('eo-component');
    component.setAttribute('data-type', type);
    component.innerHTML = componentHTML;
    return component;

}

function componentBoilerplate(type, content) {

    return `
        <div class="eo-component-content">
            ${content}
            <button type="button" class="edit-component-btn"><i class="fas fa-edit"></i></button>
        </div>
    `;

}

function textComponentHTML() {

    return `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
    `;

}

function imageComponentHTML() {

    return `
        <img src="https://picsum.photos/200/300" alt="placeholder image">
    `;

}

function buttonComponentHTML() {

    return `
        <button type="button">Button</button>
    `;
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

function buildWidgetSettingsMenu(component) {

    const type = getComponentType(component);
    const settings = getWidgetSettings(type);
    const sidebarSettingsSelector = '.eo-sidebar-settings-tab-content#[tab]';
    const contentSettings = settings.content;
    let contentSettingsHTML = '';
    const styleSettings = settings.style;
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




function buildSetting(settingAction, setting, component) {

    const settingGroup = setting.group;
    const settingType = setting.type;
    const settingLabel = setting.label;
    // const settingValue = getComponentSettingValue(settingAction, component) ? getComponentSettingValue(settingAction, component) : setting.value;
    const settingValue = getWidgetCurrentValue(settingAction, component) ? getWidgetCurrentValue(settingAction, component) : setting.value;
    const settingOptions = setting.options; 

    switch(settingType) {
        case 'textarea':
            return buildTextareaSetting(settingAction, settingLabel, settingValue, settingGroup);
        case 'number':
            return buildNumberSetting(settingAction, settingLabel, settingValue, settingGroup);
        case 'dropdown':
            return buildDropdownSetting(settingAction, settingLabel, settingValue, settingOptions, settingGroup);
        case 'color':
            return buildColorSetting(settingAction, settingLabel, settingValue, settingGroup);
        default:
            return buildTextareaSetting(settingAction, settingLabel, settingValue, settingGroup);
    
    }

}

function getWidgetCurrentValue(settingAction, component) {

    let group = null;
    const type = getComponentType(component);
    const settings = getWidgetSettings(type);    
    const contentSettings = settings.content;
    const styleSettings = settings.style;

    // check if the setting is in the content group
    if(contentSettings[settingAction]) {
        group = contentSettings[settingAction].group;
    } else if(styleSettings[settingAction]) {
        group = styleSettings[settingAction].group;
    }

    if(!group) {
        return null;
    }

    switch(group) {
        case 'content':
            return getContent(settingAction);
        case 'style':
            return getStyle(settingAction);
        case 'attribute':
            return getAttribute(settingAction);
        default:
            return null;
    }

    
}



function buildTextareaSetting(action, label, value, group) {

    return `
        <label for="textarea-${action}">${label}</label>
        <textarea name="textarea-${action}" id="textarea-${action}" data-setting-action="${action}" data-setting-group="${group}">${value}</textarea>
    `;

}

function buildNumberSetting(action, label, value, group) {

    return `
        <label for="number-${action}">${label}</label>
        <input type="number" name="number-${action}" id="number-${action}" data-setting-action="${action}" value="${value}" data-setting-group="${group}">
    `;

}

function buildDropdownSetting(action, label, value, options, group) {

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
        <select name="dropdown-${action}" id="dropdown-${action}" data-setting-action="${action}" data-setting-group="${group}">
            ${optionsHTML}
        </select>
    `;

}

function buildColorSetting(action, label, value, group) {

    return `
        <label for="color-${action}">${label}</label>
        <input type="color" name="color-${action}" id="color-${action}" data-setting-action="${action}" value="${value}" data-setting-group="${group}">
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
    const settingGroup = e.target.getAttribute('data-setting-group');
    if(!settingAction) {
        return;
    }

    switch(settingGroup) {
        case 'style':
            updateStyle(settingAction, e.target.value);
            break;
        case 'content':
            updateContent(settingAction, e.target.value);
            break;
        case 'attribute':
            updateAttribute(settingAction, e.target.value);
            break;
    }
})
    


function updateStyle(setting, value) {
    componentCurrentlyBeingEdited.style[setting] = value;
}

function updateContent(setting, value) {
    componentCurrentlyBeingEdited[setting] = value;
}

function updateAttribute(setting, value) {
    componentCurrentlyBeingEdited.setAttribute(setting, value);
}

function getStyle(setting) {

    if(setting === 'color') {
        return rgbToHex(componentCurrentlyBeingEdited.style[setting]);
    }

    return componentCurrentlyBeingEdited.style[setting];
}

function getContent(setting) {
    return componentCurrentlyBeingEdited[setting];
}

function getAttribute(setting) {
    return componentCurrentlyBeingEdited.getAttribute(setting);
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


function defineNewWidget(widgetName, widgetIcon, widgetType, widgetSettings, widgetComponent) {
    widgets.push({
        name: widgetName,
        icon: widgetIcon,
        type: widgetType,
        settings: widgetSettings,
        component: widgetComponent
    });
}

function getWidgets() {
    return widgets;
}

function getWidgetSettings(widgetType) {
    return widgets.find(widget => widget.type === widgetType).settings;
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

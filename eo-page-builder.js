
const mainContainer = document.querySelector('.eo-page-container');
let componentCurrentlyBeingEdited = null;
let widgets = [];

defineNewWidget('Heading', 'fas fa-heading', 'text', {
    content: ['innerText', 'textAlign'],
    style: ['fontSize', 'fontFamily', 'fontWeight', 'color', 'backgroundColor', 'borderStyle', 'borderWidth', 'borderRadius', 'padding', 'margin']
}, 'heading');

defineNewWidget('Image', 'fas fa-image', 'image', {
    content: ['src'],
    style: ['width', 'height']
}, 'image');

defineNewWidget('Container', 'fas fa-box', 'container', {
    content: ['width', 'height', 'minHeight', 'flexDirection', 'justifyContent', 'alignItems', 'flexWrap', 'gap'],
    style: ['backgroundColor', 'borderStyle', 'borderRadius', 'padding', 'margin']
}, 'container');

defineNewWidget('Button', 'fas fa-link', 'button', {
    content: ['innerText', 'href', 'textAlign'],
    style: ['fontSize', 'fontWeight', 'fontFamily', 'width', 'height', 'color', 'backgroundColor', 'borderStyle', 'borderWidth', 'borderRadius', 'padding', 'margin']
}, 'button');

const components = {
    'text': componentBoilerplate('heading', textComponentHTML()),
    'image': componentBoilerplate('image', imageComponentHTML()),
    'button': componentBoilerplate('button', buttonComponentHTML()),
}

const settings = {
    'innerText': {
        type: 'textarea',
        label: 'Heading',
        value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        options: null,
        group: 'content'
    }, 
    'textAlign': {
        type: 'dropdown',
        label: 'Text Align',
        value: 'left',
        options: [{value: 'left', label: 'Left'}, {value: 'center', label: 'Center'}, {value: 'right', label: 'Right'}, {value: 'justify', label: 'Justify'}],
        group: 'style'
    },
    'src': {
        type: 'text',
        label: 'Image Source',
        value: '',
        options: null,
        group: 'attribute'
    },
    'width': {
        type: 'number',
        label: 'Width',
        value: '200',
        options: null,
        group: 'style',
        showUnitsDropdown: true,
    },
    'height': {
        type: 'number',
        label: 'Height',
        value: '300',
        options: null,
        group: 'style',
        showUnitsDropdown: true,
    },
    'minHeight': {
        type: 'number',
        label: 'Min Height',
        value: '0',
        options: null,
        group: 'content',
        showUnitsDropdown: true,
    },
    'fontSize': {
        type: 'number',
        label: 'Font Size',
        value: '16',
        options: null,
        group: 'style',
        showUnitsDropdown: true,
    },
    'fontFamily': {
        type: 'dropdown',
        label: 'Font Family',
        value: 'Arial',
        options: [{value: 'Arial', label: 'Arial'}, {value: 'Helvetica', label: 'Helvetica'}, {value: 'Times New Roman', label: 'Times New Roman'}, {value: 'Times', label: 'Times'}, {value: 'Courier New', label: 'Courier New'}, {value: 'Courier', label: 'Courier'}, {value: 'Verdana', label: 'Verdana'}, {value: 'Georgia', label: 'Georgia'}, {value: 'Palatino', label: 'Palatino'}, {value: 'Garamond', label: 'Garamond'}, {value: 'Bookman', label: 'Bookman'}, {value: 'Comic Sans MS', label: 'Comic Sans MS'}, {value: 'Trebuchet MS', label: 'Trebuchet MS'}, {value: 'Arial Black', label: 'Arial Black'}, {value: 'Impact', label: 'Impact'}, {value: 'Roboto', label: 'Roboto'}, {value: 'Open Sans', label: 'Open Sans'}, {value: 'Lato', label: 'Lato'}, {value: 'Montserrat', label: 'Montserrat'}, {value: 'Source Sans Pro', label: 'Source Sans Pro'}, {value: 'Helvetica Neue', label: 'Helvetica Neue'}, {value: 'Inter', label: 'Inter'}, {value: 'Noto Sans', label: 'Noto Sans'}],
        group: 'style'
    },
    'fontWeight': {
        type: 'dropdown',
        label: 'Font Weight',
        value: 'normal',
        options: [{value: '100', label: '100'}, {value: '200', label: '200'}, {value: '300', label: '300'}, {value: '400', label: '400'}, {value: '500', label: '500'}, {value: '600', label: '600'}, {value: '700', label: '700'}, {value: '800', label: '800'}, {value: '900', label: '900'}],
        group: 'style'
    },
    'color': {
        type: 'color',
        label: 'Color',
        value: '#000000',
        options: null,
        group: 'style'
    },
    'backgroundColor': {
        type: 'color',
        label: 'Background Color',
        value: '#ffffff',
        options: null,
        group: 'style'
    },
    'borderStyle': {
        type: 'dropdown',
        label: 'Border Type',
        value: 'none',
        options: [{value: 'none', label: 'None'}, {value: 'solid', label: 'Solid'}, {value: 'dotted', label: 'Dotted'}, {value: 'dashed', label: 'Dashed'}, {value: 'double', label: 'Double'}, {value: 'groove', label: 'Groove'}, {value: 'ridge', label: 'Ridge'}, {value: 'inset', label: 'Inset'}, {value: 'outset', label: 'Outset'}],
        group: 'style'
    },
    'borderWidth': {
        type: 'number',
        label: 'Border Size',
        value: '0',
        options: null,
        group: 'style',
        showUnitsDropdown: true,
        showAllSides: true,
    },
    'borderRadius': {
        type: 'multiside',
        label: 'Border Radius',
        selectors: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'],
        value: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
        },
        options: null,
        group: 'style',
        showUnitsDropdown: true,
        showAllSides: true,
    },
    'padding': {
        type: 'multiside',
        label: 'Padding',
        value: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
        },
        options: null,
        group: 'style',
        showUnitsDropdown: true,
        showAllSides: true,
    },
    'margin': {
        type: 'multiside',
        label: 'Margin',
        value: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
        },
        options: null,
        group: 'style',
        showUnitsDropdown: true,
        showAllSides: true,
    },
    'flexDirection': {
        type: 'dropdown',
        label: 'Flex Direction',
        value: 'row',
        options: [{value: 'row', label: 'Row'}, {value: 'row-reverse', label: 'Row Reverse'}, {value: 'column', label: 'Column'}, {value: 'column-reverse', label: 'Column Reverse'}],
        group: 'style'
    },
    'justifyContent': {
        type: 'dropdown',
        label: 'Justify Content',
        value: 'flex-start',
        options: [{value: 'flex-start', label: 'Flex Start'}, {value: 'flex-end', label: 'Flex End'}, {value: 'center', label: 'Center'}, {value: 'space-between', label: 'Space Between'}, {value: 'space-around', label: 'Space Around'}, {value: 'space-evenly', label: 'Space Evenly'}],
        group: 'style'
    },
    'alignItems': {
        type: 'dropdown',
        label: 'Align Items',
        value: 'flex-start',
        options: [{value: 'flex-start', label: 'Flex Start'}, {value: 'flex-end', label: 'Flex End'}, {value: 'center', label: 'Center'}, {value: 'baseline', label: 'Baseline'}, {value: 'stretch', label: 'Stretch'}],
        group: 'style'
    },
    'flexWrap': {
        type: 'dropdown',
        label: 'Flex Wrap',
        value: 'nowrap',
        options: [{value: 'nowrap', label: 'No Wrap'}, {value: 'wrap', label: 'Wrap'}, {value: 'wrap-reverse', label: 'Wrap Reverse'}],
        group: 'style'
    },
    'gap': {
        type: 'text',
        label: 'Gap',
        value: '0',
        options: null,
        group: 'style',
        showUnitsDropdown: true,
    },
    'href': {
        type: 'text',
        label: 'Link',
        value: '#',
        options: null,
        group: 'attribute'
    }
}

function settingContainerHTML(content, isMultiSide = false, showUnitsDropdown = false, label) {
    return `
        <div class="setting-container ${isMultiSide ? 'multiside' : ''}">
            <div class="setting-label-container">
                <label for="text-${label}">${label}</label>
                ${isMultiSide || showUnitsDropdown ? unitsDropdownSettingHTML() : ''}
            </div>
            ${content}
        </div>
    `;
}

function createTextarea(setting) {
    const value = getWidgetCurrentValue(setting.group, setting.settingAction) || setting.value;

    return `
        <div class="setting">
            <textarea name="textarea-${setting.settingAction}" id="textarea-${setting.settingAction}" data-setting-action="${setting.settingAction}" data-setting-group="${setting.group}">${value}</textarea>
        </div>
    `;
}

function createNumberInput(setting) {
    const value = getWidgetCurrentValue(setting.group, setting.settingAction) || setting.value;

    return `
        <div class="setting number-setting">
            <input type="range" min="0" max="1000" name="number-${setting.settingAction}" id="number-${setting.settingAction}" data-setting-action="${setting.settingAction}" value="${value}" data-setting-group="${setting.group}">
            <input type="number" min="0" name="number-${setting.settingAction}" id="number-${setting.settingAction}" data-setting-action="${setting.settingAction}" value="${value}" data-setting-group="${setting.group}">
        </div>
    `;
}

function createDropdown(setting) {
    const value = getWidgetCurrentValue(setting.group, setting.settingAction) || setting.value;
    return `
        <div class="setting">
            <select name="dropdown-${setting.settingAction}" id="dropdown-${setting.settingAction}" data-setting-action="${setting.settingAction}" data-setting-group="${setting.group}">
                ${setting.options.map(option => `<option value="${option.value}" ${option.value === value ? 'selected' : ''}>${option.label}</option>`)}
            </select>
        </div>
    `;
}

function createColorInput(setting) {
    const value = getWidgetCurrentValue(setting.group, setting.settingAction) || setting.value;
    return `
        <div class="setting">
            <input type="color" name="color-${setting.settingAction}" id="color-${setting.settingAction}" data-setting-action="${setting.settingAction}" value="${value}" data-setting-group="${setting.group}">
        </div>
    `;
}

function createTextInput(setting) {
    const value = getWidgetCurrentValue(setting.group, setting.settingAction) || setting.value;
    return `
        <div class="setting">
            <input type="text" name="text-${setting.settingAction}" id="text-${setting.settingAction}" data-setting-action="${setting.settingAction}" value="${value}" data-setting-group="${setting.group}">
        </div>
    `;
}

function createMultisideInput(setting) {
    
    const selectors = setting.selectors || [setting.settingAction + 'Top', setting.settingAction + 'Right', setting.settingAction + 'Bottom', setting.settingAction + 'Left']

    const topValue = getWidgetCurrentValue(setting.group, setting.settingAction + 'Top') ? getWidgetCurrentValue(setting.group, setting.settingAction + 'Top') : setting.value.top;
    const rightValue = getWidgetCurrentValue(setting.group, setting.settingAction + 'Right') ? getWidgetCurrentValue(setting.group, setting.settingAction + 'Right') : setting.value.right;
    const bottomValue = getWidgetCurrentValue(setting.group, setting.settingAction + 'Bottom') ? getWidgetCurrentValue(setting.group, setting.settingAction + 'Bottom') : setting.value.bottom;
    const leftValue = getWidgetCurrentValue(setting.group, setting.settingAction + 'Left') ? getWidgetCurrentValue(setting.group, setting.settingAction + 'Left') : setting.value.left;    


    return `
        <div class="setting">
            <div class="multiside-setting-container">
                <input type="number" min="0" id="${setting.settingAction}-top" data-setting-action="${selectors[0]}" data-setting-group="${setting.group}" value="${topValue}">
                <label for="${setting.settingAction}-top">Top</label>
            </div>
            <div class="multiside-setting-container">
                <input type="number" min="0" id="${setting.settingAction}-right" data-setting-action="${selectors[1]}" data-setting-group="${setting.group}" value="${rightValue}">
                <label for="${setting.settingAction}-right">Right</label>
            </div>
            <div class="multiside-setting-container">
                <input type="number" min="0" id="${setting.settingAction}-bottom" data-setting-action="${selectors[2]}" data-setting-group="${setting.group}" value="${bottomValue}">
                <label for="${setting.settingAction}-bottom">Bottom</label>
            </div>
            <div class="multiside-setting-container">
                <input type="number" min="0" id="${setting.settingAction}-left" data-setting-action="${selectors[3]}" data-setting-group="${setting.group}" value="${leftValue}">
                <label for="${setting.settingAction}-left">Left</label>
            </div>
            <div class="multiside-setting-container">
                <button type="button" class="eo-sidebar-settings-link-values-btn" data-setting-action="${setting.settingAction}">L</button>
                <label for="${setting.settingAction}-left">Link</label>
            </div>
        </div>
    `;
}

function getSettingHTML(settingAction) {
    const setting = getSetting(settingAction);
    const settingType = setting.type;
    const showUnitsDropdown = setting.showUnitsDropdown;

    switch(settingType) {
        case 'textarea':
            return settingContainerHTML(createTextarea(setting), false, showUnitsDropdown, setting.label);
        case 'number':
            return settingContainerHTML(createNumberInput(setting), false, showUnitsDropdown, setting.label);
        case 'dropdown':
            return settingContainerHTML(createDropdown(setting), false, showUnitsDropdown, setting.label);
        case 'color':
            return settingContainerHTML(createColorInput(setting), false, showUnitsDropdown, setting.label);
        case 'text':
            return settingContainerHTML(createTextInput(setting), false, showUnitsDropdown, setting.label);
        case 'multiside':
            return settingContainerHTML(createMultisideInput(setting), true, showUnitsDropdown, setting.label);
        default:
            console.error('No setting type defined');
            return '';
    }
}

function unitsDropdownSettingHTML() {

    const units = ['px', 'em', 'rem', '%', 'vw', 'vh'];

    return `
    <div class="units-dropdown">
        <select name="units" id="units">
            ${units.map((unit) => `<option value="${unit}">${unit}</option>`)}
        </select>
    </div>`;

}


function getSetting(settingAction) {

    return {settingAction, ...settings[settingAction]};

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

    if(e.target.matches('.eo-container')) {
        const container = e.target;
        selectElement(container);
        selectedContainer = container;
    }

    if(e.target.matches('.eo-container-controls [data-action="drag"]')) {
        const container = e.target.closest('.eo-container');
        selectElement(container);
        selectedContainer = container;
    }

    if(e.target.matches('.edit-component-btn')) {
        const component = e.target.closest('.eo-component');
        selectElement(component.children[0]);        
    }
    if(e.target.matches('.eo-component')) {
        const component = e.target;
        selectElement(component.children[0]);
    }



    if(e.target.matches('.eo-sidebar-settings-link-values-btn')) {
        e.target.classList.toggle('linked');
    }

})

document.addEventListener('mousedown', (e) => {
    
    if(e.target.matches('button[data-action="drag"]')) {
        e.target.closest('.eo-container').setAttribute('draggable', true);
    }

    if(e.target.matches('.eo-container')) {
        e.target.setAttribute('draggable', true);
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

    if(e.target.matches('.eo-container')) {
        e.target.setAttribute('draggable', false);
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

function checkContainers() {
    const containers = mainContainer.querySelectorAll('.eo-container');
        containers.forEach((container) => {
            checkIfContainerIsEmpty(container);
    })
}

document.addEventListener('dragover', (e) => {

    const currentlyDragging = document.querySelector('.dragging');
    const isDraggingContainer = currentlyDragging?.matches('.eo-container');
    const isDraggingComponent = currentlyDragging?.matches('.eo-component');
    
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
        const componentContainer = e.target;
        const componentBelow = findComponentBelow(e.clientY, componentContainer);

        if(!componentBelow) {
            componentContainer.appendChild(currentlyDragging);
        } else {
            componentContainer.insertBefore(currentlyDragging, componentBelow);
        }

    }

    if (e.target.matches('.eo-container:not(.dragging)') && isDraggingContainer) {
        e.preventDefault();
        const componentContainer = e.target;
        const containerBelow = findComponentBelow(e.clientY, componentContainer);
        
        if(!containerBelow) {
            componentContainer.appendChild(currentlyDragging);
        } else {
            componentContainer.insertBefore(currentlyDragging, containerBelow);
        }
    }
    

    if(e.target.matches('.eo-component') && (isDraggingComponent || isDraggingContainer)) {

        
        e.preventDefault();
        const componentBelow = e.target.closest('.eo-component');
        const componentContainer = componentBelow.closest('.eo-container');
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
    const isDraggingComponent = currentlyDragging?.matches('.eo-component');

    if(e.target.matches('.eo-container') && isDraggingComponent) {
        e.target.classList.add('dragover');
    }
})

document.addEventListener('dragleave', (e) => {
    
    const currentlyDragging = document.querySelector('.dragging');
    const isDraggingComponent = currentlyDragging?.matches('.eo-component');

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
            <button type="button" data-action="copy"><i class="fas fa-copy"></i></button>
            <button type="button" data-action="remove"><i class="fas fa-trash"></i></button>
        </div>
        <button type="button" class="add-component-btn"><i class="fas fa-plus"></i></button>
    `;

    return container;

}

function copyContainer(container) {

    const containerToCopy = container.cloneNode(true);
    const containerId = getNewContainerId();
    containerToCopy.setAttribute('data-id', containerId);
    containerToCopy.querySelectorAll('.eo-component').forEach((component) => {
        const componentId = getNewContainerId();
        component.setAttribute('data-id', componentId);
    })

    mainContainer.appendChild(containerToCopy);
    selectElement(containerToCopy);
    checkIfAddFirstButtonNeeded();


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

    const components = container.querySelectorAll('.eo-component, .eo-container');

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

    if(e.target.matches('.add-component-btn')) {    
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
            checkContainers();
            return;
        } else if(componentType === 'container' && !containerToAppend) {
            mainContainer.appendChild(addContainer());
            checkContainers();
            return;
        } else if(componentType === 'container' && containerToAppend) {
            containerToAppend = containerToAppend.appendChild(addContainer());
            checkContainers();
            return
        }
        let componentContainer = containerToAppend;
        const component = addComponent(componentType);
        componentContainer.appendChild(component);
        checkContainers();
    }

    if(e.target.matches('.eo-container [data-action="copy"]')) {
        const container = e.target.closest('.eo-container');
        copyContainer(container);
        checkContainers();
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
        ${content}
        <button type="button" class="edit-component-btn"><i class="fas fa-edit"></i></button>
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
        <button class="eo-button" type="button">Button</button>
    `;
}


function findComponentBelow(mouseY, container) {
    const allComponents = container.querySelectorAll('.eo-component:not(.dragging), .eo-container:not(.dragging)');

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
    return component.getAttribute('data-type') ? component.getAttribute('data-type') : component.parentElement.getAttribute('data-type');
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

        
        const settingHTML = getSettingHTML(settingAction);
        contentSettingsHTML += settingHTML;
    })

    Object.keys(styleSettings).forEach((settingAction) => {
        
        const settingHTML = getSettingHTML(settingAction);
        styleSettingsHTML += settingHTML;

    })

    const contentTab = sidebarSettingsSelector.replace('[tab]', 'content');
    const styleTab = sidebarSettingsSelector.replace('[tab]', 'style');

    document.querySelector(contentTab).innerHTML = contentSettingsHTML;
    document.querySelector(styleTab).innerHTML = styleSettingsHTML;
}

function getWidgetCurrentValue(settingGroup, settingAction) {

    switch(settingGroup) {
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
  
    let settingAction = e.target.getAttribute('data-setting-action');
    const settingGroup = e.target.getAttribute('data-setting-group');

    if(settingAction) {
        
        const valuesAreLinked = e.target.closest('.setting-container').querySelector('.eo-sidebar-settings-link-values-btn')?.classList.contains('linked');

        if(valuesAreLinked) { 
            // if the values are linked, update all the values. Send an object with all the values to the update function
            const allSettings = e.target.closest('.setting-container').querySelectorAll('[data-setting-action]');
            settingAction = {}
            allSettings.forEach((setting) => {
                setting.value = e.target.value;
                settingAction[setting.getAttribute('data-setting-action')] = setting.value;
            })


        }

        const unit = e.target.closest('.setting-container').querySelector('#units');
        const unitValue = unit ? unit.value : null;
        
        switch(settingGroup) {
            case 'style':
                updateStyle(settingAction, e.target.value, unitValue);
                break;
            case 'content':
                updateContent(settingAction, e.target.value);
                break;
            case 'attribute':
                updateAttribute(settingAction, e.target.value);
                break;
        }
    }

    if(e.target.matches('#units')) {
        const closestSettingContainer = e.target.closest('.setting-container');
        let settingAction = closestSettingContainer.querySelector('[data-setting-action]').getAttribute('data-setting-action');
        const settingGroup = closestSettingContainer.querySelector('[data-setting-group]').getAttribute('data-setting-group');
        const unitValue = e.target.value;
        const closestRangeInput = closestSettingContainer.querySelector('input[type="range"]');
        closestRangeInput.max = unitValue === 'px' ? 1000 : 100;

        if(settingAction) {

            const valuesAreLinked = e.target.closest('.setting-container').querySelector('.eo-sidebar-settings-link-values-btn')?.classList.contains('linked');

            if(valuesAreLinked) {
                // if the values are linked, update all the values. Send an object with all the values to the update function
                const allSettings = e.target.closest('.setting-container').querySelectorAll('[data-setting-action]');
                settingAction = {}
                allSettings.forEach((setting) => {
                    setting.value = allSettings[0].value;
                    settingAction[setting.getAttribute('data-setting-action')] = setting.value;
                })
            }
            
            switch(settingGroup) {
                case 'style':
                    updateStyle(settingAction, closestSettingContainer.querySelector('[data-setting-action]').value, unitValue);
                    break;
                case 'content':
                    updateContent(settingAction, closestSettingContainer.querySelector('[data-setting-action]').value);
                    break;
                case 'attribute':
                    updateAttribute(settingAction, closestSettingContainer.querySelector('[data-setting-action]').value);
                    break;
            }
        }
    }

    if(e.target.matches('.setting.number-setting input[type="range"]')) {
        const closestNumberInput = e.target.closest('.setting.number-setting').querySelector('input[type="number"]');
        closestNumberInput.value = e.target.value;
    }

})

function loadGoogleFont(font) {
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css?family=${font.replace(' ', '+')}`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
}
    


function updateStyle(setting, value, unit = null) {

    if(unit) {
        value += unit;
    }
   
    // check if the setting is an object
    if(typeof setting === 'object') {
        Object.keys(setting).forEach((key) => {
            if(unit) {
                setting[key] += unit;
            }
           
            if(key === 'fontFamily') {
                loadGoogleFont(setting[key])
            }
            
            componentCurrentlyBeingEdited.style[key] = setting[key]
        })
    } else {
        if(setting === 'fontFamily') {
            loadGoogleFont(value)
        }
        componentCurrentlyBeingEdited.style[setting] = value.toString();
    }

}

function updateContent(setting, value) {
    componentCurrentlyBeingEdited[setting] = value;
}

function updateAttribute(setting, value) {
    componentCurrentlyBeingEdited.setAttribute(setting, value);
}

function getStyle(setting) {

    if(setting === 'color' || setting === 'backgroundColor') {
        return cleanSettingValue(rgbToHex(componentCurrentlyBeingEdited?.style[setting]));
    }

    return cleanSettingValue(componentCurrentlyBeingEdited?.style[setting]);
}

function getContent(setting) {
    return componentCurrentlyBeingEdited[setting];
}

function getAttribute(setting) {
    return componentCurrentlyBeingEdited.getAttribute(setting);
}

function cleanSettingValue(value) {
    const units = ['px', 'em', 'rem', '%', 'vw', 'vh'];

    units.forEach((unit) => {
        value = value?.replace(unit, '');
    })

    return value;
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
    const widgetSettings = widgets.find(widget => widget.type === widgetType).settings;
    const result = {
        content: {},
        style: {}
    };

    const contentSettings = widgetSettings.content;
    const styleSettings = widgetSettings.style;

    contentSettings.forEach((setting) => {
        result.content[setting] = settings[setting];
    })

    styleSettings.forEach((setting) => {
        result.style[setting] = settings[setting];
    })

    return result;

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

document.addEventListener('keydown', (e) => {
    if(e.key === 'Delete' && componentCurrentlyBeingEdited) {
        removeComponent();
    }
})

function removeComponent() {
    componentCurrentlyBeingEdited.remove();
    componentCurrentlyBeingEdited = null;
    setSidebarView('elements');
    checkIfAddFirstButtonNeeded();
}

function selectElement(element) {
    componentCurrentlyBeingEdited = element;
    setSelection(element);
    setSidebarView('settings');
    buildWidgetSettingsMenu(element);
}

function setSelection(element) {
    const selectedElements = document.querySelectorAll('[data-selected="true"]');
    selectedElements.forEach((selectedElement) => {
        selectedElement.removeAttribute('data-selected');
    })

    element.setAttribute('data-selected', true);
}



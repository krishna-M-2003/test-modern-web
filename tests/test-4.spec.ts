import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
});

  test.describe('Pratice Testing', () => {

    test('JQuery UI', async ({ page }) => {
      await page.getByRole('link', { name: 'JQuery UI', exact: true }).click();
      await expect(page.getByRole('link', { name: 'JQuery UI' })).toBeVisible();
      await page.getByRole('link', { name: 'JQuery UI' }).click();
      await expect(page.getByRole('heading', { name: 'jQuery UI', exact: true }).getByRole('link')).toBeVisible();
      await expect(page.getByRole('link', { name: 'Demos', exact: true })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Download', exact: true })).toBeVisible();
      await expect(page.getByRole('link', { name: 'API Documentation', exact: true })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Themes', exact: true })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Development', exact: true })).toBeVisible();
      await expect(page.getByLabel('Navigation').getByRole('link', { name: 'Support' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Blog', exact: true })).toBeVisible();
      await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Interactions' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Draggable' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Resizable' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Selectable' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Sortable' })).toBeVisible();
      await expect(page.locator('#banner-secondary')).toContainText('jQuery UI is a curated set of user interface interactions, effects, widgets, and themes built on top of the jQuery JavaScript Library. Whether you\'re building highly interactive web applications or you just need to add a date picker to a form control, jQuery UI is the perfect choice.');
      await expect(page.getByRole('heading', { name: 'Widgets' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Accordion' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Button' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Checkboxradio' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Controlgroup' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Datepicker' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Dialog' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Menu', exact: true })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Progressbar' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Selectmenu' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Slider' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Spinner' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Tabs' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Tooltip' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Effects' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Add Class' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Color Animation' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Easing' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Effect' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Hide' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Remove Class' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Show' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Switch Class' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Toggle', exact: true })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Toggle Class' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Utilities' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Position' })).toBeVisible();
      await expect(page.locator('li').filter({ hasText: 'Widget Factory' })).toBeVisible();
      await expect(page.getByPlaceholder('Search')).toBeVisible();
    });

    test('Interaction Draggable', async ({ page }) => {

      await page.getByRole('link', { name: 'JQuery UI', exact: true }).click();
      await expect(page.getByRole('link', { name: 'JQuery UI' })).toBeVisible();
      await page.getByRole('link', { name: 'JQuery UI' }).click();
      await expect(page.getByRole('heading', { name: 'Interactions' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Draggable', exact: true })).toBeVisible();
      await page.getByRole('link', { name: 'Draggable', exact: true }).click();
      await expect(page.getByRole('heading', { name: 'Draggable' })).toBeVisible();
      await expect(page.getByText('Allow elements to be moved')).toBeVisible();
      await expect(page.locator('iframe').contentFrame().locator('#draggable')).toBeVisible();
      await expect(page.getByRole('link', { name: 'Auto-scroll' })).toBeVisible();
      await page.getByRole('link', { name: 'Constrain movement' }).click();
      await page.locator('iframe').contentFrame().getByText('I can be dragged only horizontally').click();
      await page.locator('iframe').contentFrame().locator('#draggable3').click();
      await expect(page.getByRole('link', { name: 'Cursor style' })).toBeVisible();
      await page.getByRole('link', { name: 'Cursor style' }).click();
      await page.locator('iframe').contentFrame().getByText('I will always stick to the').click();
      await expect(page.locator('#content').getByRole('link', { name: 'Events' })).toBeVisible();
      await page.locator('#content').getByRole('link', { name: 'Events' }).click();
      await page.locator('iframe').contentFrame().locator('#event-start span').first().click();
      await page.locator('iframe').contentFrame().getByText('"drag" invoked 0x').click();
      await page.locator('iframe').contentFrame().locator('#event-drag').getByText('0').click();
      await expect(page.getByRole('link', { name: 'Handles' })).toBeVisible();
      await page.getByRole('link', { name: 'Handles' }).click();
      await page.locator('iframe').contentFrame().getByText('I can be dragged only by this').click();
      await expect(page.getByRole('link', { name: 'jQuery UI Draggable + Sortable' })).toBeVisible();
      await page.getByRole('link', { name: 'jQuery UI Draggable + Sortable' }).click();
      await page.locator('iframe').contentFrame().getByText('Item 1').click();
      await page.locator('iframe').contentFrame().getByText('Item 3').click();await expect(page.getByRole('link', { name: 'Revert position' })).toBeVisible();
      await page.getByRole('link', { name: 'Revert position' }).click();
      await page.locator('iframe').contentFrame().getByText('Revert the original').click();
      await expect(page.getByRole('link', { name: 'Snap to element or grid' })).toBeVisible();
      await page.getByRole('link', { name: 'Snap to element or grid' }).click();
      await expect(page.locator('iframe').contentFrame().getByText('Default (snap: true), snaps')).toBeVisible();
      await expect(page.locator('iframe').contentFrame().getByText('Default (snap: true), snaps')).toBeVisible();
      await expect(page.locator('iframe').contentFrame().locator('#draggable')).toBeVisible();
      await expect(page.getByRole('link', { name: 'Visual feedback' })).toBeVisible();
      await page.getByRole('link', { name: 'Visual feedback' }).click();
      await expect(page.locator('iframe').contentFrame().getByText('Semi-transparent clone')).toBeVisible();await page.goto('https://jqueryui.com/draggable/#visual-feedback');
      await page.goto('https://jqueryui.com/draggable/#snap-to');
      await page.goto('https://jqueryui.com/draggable/#revert');
      await page.goto('https://jqueryui.com/draggable/#sortable');
      await page.goto('https://jqueryui.com/draggable/#handle');
      await page.goto('https://jqueryui.com/draggable/#events');
      await page.goto('https://jqueryui.com/draggable/#cursor-style');
      await page.goto('https://jqueryui.com/draggable/#constrain-movement');
      await page.goto('https://jqueryui.com/draggable/');
      await page.goto('https://jqueryui.com/');
      
    });

    test('InterAction Droppable', async ({ page }) => {

    await page.getByRole('link', { name: 'JQuery UI', exact: true }).click();
    await page.getByRole('link', { name: 'JQuery UI' }).click();
    await page.getByRole('link', { name: 'Droppable' }).click();
    await page.locator('iframe').contentFrame().locator('#draggable').click();
    await page.locator('iframe').contentFrame().getByText('Drag me to my target').click();
    await expect(page.getByRole('link', { name: 'Accept' })).toBeVisible();
    await page.getByRole('link', { name: 'Accept' }).click();
    await page.locator('iframe').contentFrame().getByText('I\'m draggable but can\'t be').click();
    await expect(page.getByRole('link', { name: 'Prevent propagation' })).toBeVisible();
    await page.getByRole('link', { name: 'Prevent propagation' }).click();
    await expect(page.getByRole('link', { name: 'Revert draggable position' })).toBeVisible();
    await page.getByRole('link', { name: 'Revert draggable position' }).click();
    await expect(page.getByRole('link', { name: 'Simple photo manager' })).toBeVisible();
    await page.getByRole('link', { name: 'Simple photo manager' }).click();
    await page.locator('iframe').contentFrame().getByRole('link', { name: 'Delete image' }).nth(2).click();
    await page.locator('iframe').contentFrame().getByRole('link', { name: 'Delete image' }).nth(2).click();
    await page.locator('iframe').contentFrame().getByRole('link', { name: 'Delete image' }).nth(1).click();
    await expect(page.getByRole('link', { name: 'Visual feedback' })).toBeVisible();
    await page.getByRole('link', { name: 'Visual feedback' }).click();
    });

    test('Interaction Resizable', async ({ page }) => {
      
      await page.goto('https://jqueryui.com/');
      await expect(page.getByRole('link', { name: 'Resizable' })).toBeVisible();
      await page.getByRole('link', { name: 'Resizable' }).click();
      await expect(page.getByText('Change the size of an element')).toBeVisible();
      await expect(page.getByRole('link', { name: 'Animate' })).toBeVisible();
      await page.getByRole('link', { name: 'Animate' }).click();
      await expect(page.getByRole('link', { name: 'Constrain resize area' })).toBeVisible();
      await page.getByRole('link', { name: 'Constrain resize area' }).click();
      await expect(page.getByRole('link', { name: 'Helper' })).toBeVisible();
      await page.getByRole('link', { name: 'Helper' }).click();
      await page.getByRole('link', { name: 'Helper' }).press('Tab');
      await expect(page.getByRole('link', { name: 'Maximum / minimum size' })).toBeVisible();
      await page.getByRole('link', { name: 'Maximum / minimum size' }).click();
      await expect(page.getByRole('link', { name: 'Preserve aspect ratio' })).toBeVisible();
      await page.getByRole('link', { name: 'Preserve aspect ratio' }).click();
      await expect(page.getByRole('link', { name: 'Snap to grid' })).toBeVisible();
      await page.getByRole('link', { name: 'Snap to grid' }).click();
      await expect(page.getByRole('link', { name: 'Synchronous resize' })).toBeVisible();
      await page.getByRole('link', { name: 'Synchronous resize' }).click();
      await page.getByRole('link', { name: 'Synchronous resize' }).press('Tab');
      await expect(page.getByRole('link', { name: 'Textarea' })).toBeVisible();
      await page.getByRole('link', { name: 'Textarea' }).click();
      await expect(page.getByRole('link', { name: 'Visual feedback' })).toBeVisible();
      await page.getByRole('link', { name: 'Visual feedback' }).click();
      await page.goto('https://jqueryui.com/');

    });

    test('Interaction Selectable', async ({ page }) => {

    await page.goto('https://jqueryui.com/');
    await expect(page.getByRole('link', { name: 'Selectable' })).toBeVisible();
    await page.getByRole('link', { name: 'Selectable' }).click();
    await expect(page.getByRole('heading', { name: 'Selectable' })).toBeVisible();
    await expect(page.locator('iframe').contentFrame().getByText('Item 1')).toBeVisible();
    await page.locator('iframe').contentFrame().getByText('Item 1').click();
    await expect(page.locator('iframe').contentFrame().getByText('Item 1')).toBeVisible();
    await page.locator('iframe').contentFrame().getByText('Item 2').click();
    await page.locator('iframe').contentFrame().getByText('Item 3').click();
    await page.locator('iframe').contentFrame().getByText('Item 4').click();
    await page.locator('iframe').contentFrame().getByText('Item 5').click();
    await page.locator('iframe').contentFrame().getByText('Item 6').click();
    await page.locator('iframe').contentFrame().getByText('Item 7').click();
    await expect(page.getByRole('link', { name: 'Display as grid' })).toBeVisible();
    await page.getByRole('link', { name: 'Display as grid' }).click();
    await expect(page.locator('iframe').contentFrame().getByText('1', { exact: true })).toBeVisible();
    await expect(page.locator('iframe').contentFrame().getByText('2', { exact: true })).toBeVisible();
    await expect(page.locator('iframe').contentFrame().getByText('3')).toBeVisible();
    await expect(page.locator('iframe').contentFrame().getByText('4')).toBeVisible();
    await expect(page.locator('iframe').contentFrame().getByText('5')).toBeVisible();
    await expect(page.locator('iframe').contentFrame().getByText('6')).toBeVisible();
    await expect(page.locator('iframe').contentFrame().getByText('7')).toBeVisible();
    await expect(page.locator('iframe').contentFrame().getByText('8')).toBeVisible();
    await expect(page.locator('iframe').contentFrame().getByText('9')).toBeVisible();
    await expect(page.locator('iframe').contentFrame().getByText('10')).toBeVisible();
    await expect(page.locator('iframe').contentFrame().getByText('11')).toBeVisible();
    await expect(page.locator('iframe').contentFrame().getByText('12')).toBeVisible();
    await page.locator('iframe').contentFrame().getByText('1', { exact: true }).click();
    await page.locator('iframe').contentFrame().getByText('2', { exact: true }).click();
    await page.locator('iframe').contentFrame().getByText('3').click();
    await page.locator('iframe').contentFrame().getByText('4').click();
    await page.locator('iframe').contentFrame().getByText('5').click();
    await page.locator('iframe').contentFrame().getByText('6').click();
    await page.locator('iframe').contentFrame().getByText('7').click();
    await page.locator('iframe').contentFrame().getByText('8').click();
    await page.locator('iframe').contentFrame().getByText('12').click();
    await page.locator('iframe').contentFrame().getByText('11').click();
    await page.locator('iframe').contentFrame().getByText('10').click();
    await page.locator('iframe').contentFrame().getByText('9').click();
    await expect(page.getByRole('link', { name: 'Serialize' })).toBeVisible();
    await page.getByRole('link', { name: 'Serialize' }).click();
    await expect(page.locator('iframe').contentFrame().getByText('You\'ve selected: none.')).toBeVisible();
    await page.locator('iframe').contentFrame().getByText('Item 1').click();
    await expect(page.locator('iframe').contentFrame().getByText('You\'ve selected: #')).toBeVisible();
    await expect(page.locator('iframe').contentFrame().getByText('Item 2')).toBeVisible();
    await page.locator('iframe').contentFrame().getByText('Item 2').click();
    await expect(page.locator('iframe').contentFrame().locator('#select-result')).toContainText('#2');
    await page.locator('iframe').contentFrame().getByText('Item 3').click();
    await page.locator('iframe').contentFrame().getByText('Item 4').click();
    await page.locator('iframe').contentFrame().getByText('Item 5').click();
    await page.locator('iframe').contentFrame().getByText('Item 6').click();
    });

    test('Interaction Sortable', async ({ page }) => {
      await page.goto('https://jqueryui.com/');
      await expect(page.getByRole('link', { name: 'Sortable' })).toBeVisible();
      await page.getByRole('link', { name: 'Sortable' }).click();
      await expect(page.getByRole('heading', { name: 'Sortable' })).toBeVisible();
      await expect(page.locator('iframe').contentFrame().getByText('Item 1')).toBeVisible();
      await expect(page.locator('iframe').contentFrame().getByText('Item 2')).toBeVisible();
      await expect(page.locator('iframe').contentFrame().getByText('Item 3')).toBeVisible();
      await expect(page.locator('iframe').contentFrame().getByText('Item 4')).toBeVisible();
      await expect(page.locator('iframe').contentFrame().getByText('Item 5')).toBeVisible();
      await expect(page.locator('iframe').contentFrame().getByText('Item 6')).toBeVisible();
      await expect(page.locator('iframe').contentFrame().getByText('Item 7')).toBeVisible();
      await expect(page.getByRole('link', { name: 'Connect lists' })).toBeVisible();
      await page.getByRole('link', { name: 'Connect lists' }).click();
      await expect(page.getByRole('link', { name: 'Display as grid' })).toBeVisible();
      await page.getByRole('link', { name: 'Display as grid' }).click();
      await expect(page.getByRole('link', { name: 'Drop placeholder' })).toBeVisible();
      await page.getByRole('link', { name: 'Drop placeholder' }).click();
      await expect(page.getByRole('link', { name: 'Handle empty lists' })).toBeVisible();
      await page.getByRole('link', { name: 'Handle empty lists' }).click();
      await expect(page.getByRole('link', { name: 'Include / exclude items' })).toBeVisible();
      await page.getByRole('link', { name: 'Include / exclude items' }).click();
      await expect(page.getByRole('link', { name: 'Portlets' })).toBeVisible();
      await page.getByRole('link', { name: 'Portlets' }).click();
      await page.goto('https://jqueryui.com/');
    });

    test('Witgets Accordion', async ({ page }) => {
      
    });
  });

  
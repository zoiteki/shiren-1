import React from 'react';

// import Link from './link';
import { Sidebar, ListItem } from './styles/Sidebar';

const SidebarLayout = ({ location, tableOfContents, allowedDepths = [1, 2, 3] }) => {
  // Debug: Log the table of contents data
  console.log('Right Sidebar - tableOfContents (headings):', tableOfContents);
  
  let finalNavItems = [];

  // Process headings if they exist
  if (tableOfContents && Array.isArray(tableOfContents) && tableOfContents.length > 0) {
    console.log('Processing headings:', tableOfContents);
    
    // Filter headings by depth (1 = #, 2 = ##, 3 = ###, etc.)
    // Use the allowedDepths prop to control which heading levels appear
    const filteredHeadings = tableOfContents.filter(heading => 
      allowedDepths.includes(heading.depth)
    );
    
    finalNavItems = filteredHeadings.map((heading, index) => {
      console.log('Processing heading:', heading);
      
      // Use the id if it exists, otherwise generate one from the value
      const itemId = heading.id || heading.value
        ? (heading.id || heading.value
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // Remove special characters
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-') // Replace multiple hyphens with single
            .trim()) // Remove leading/trailing whitespace
        : '';

      console.log('Generated itemId:', itemId);

      return (
        <ListItem key={index} to={`#${itemId}`} level={heading.depth || 1}>
          {heading.value}
        </ListItem>
      );
    });
  } else {
    console.log('No headings found or headings is not an array');
  }

  console.log('finalNavItems:', finalNavItems);

  if (finalNavItems && finalNavItems.length) {
    return (
      <Sidebar>
        <ul className={'rightSideBarUL'}>
          <li className={'rightSideTitle'}>CONTENTS</li>
          {finalNavItems}
        </ul>
      </Sidebar>
    );
  } else {
        return (
          <Sidebar>
            <ul></ul>
          </Sidebar>
        );
      }
};

export default SidebarLayout;

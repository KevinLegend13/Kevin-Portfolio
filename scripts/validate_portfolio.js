const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'prototypes', 'navigation_system', 'index.html');
const content = fs.readFileSync(htmlPath, 'utf8');

console.log('=== KEVIN PRAKASH J PORTFOLIO VALIDATION SUITE ===\n');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${message}`);
    failCount++;
  }
}

// 1. Check Scene Elements in DOM
const scenes = ['home', 'about', 'skills', 'projects', 'research', 'experience', 'contact'];
scenes.forEach(s => {
  assert(content.includes(`id="entity-${s}"`), `Scene Entity entity-${s} exists`);
  assert(content.includes(`id="compact-${s}"`), `Compact Node compact-${s} exists`);
  assert(content.includes(`id="page-${s}"`), `Full Page page-${s} exists`);
});

// 2. Check Key Interactive Buttons and Handlers
assert(content.includes('navigateToProjectDirect'), 'navigateToProjectDirect function exists');
assert(content.includes('navigateToResearchDirect'), 'navigateToResearchDirect function exists');
assert(content.includes('navigateToSkillDirect'), 'navigateToSkillDirect function exists');
assert(content.includes('openProjectCaseStudy'), 'openProjectCaseStudy function exists');
assert(content.includes('openResearchInvestigation'), 'openResearchInvestigation function exists');
assert(content.includes('requestNavigation'), 'requestNavigation function exists');
assert(content.includes('getSpatialScale'), 'getSpatialScale responsive physics helper exists');

// 3. Extract and check all IDs accessed via getElementById
const getElemRegex = /document\.getElementById\(['"]([^'"]+)['"]\)/g;
let match;
const queriedIds = new Set();
while ((match = getElemRegex.exec(content)) !== null) {
  queriedIds.add(match[1]);
}

const dynamicIds = new Set(['projects-dangling-stage', 'projects-dangling-canvas', 'skills-popup-box']);

queriedIds.forEach(id => {
  if (!id.includes('$')) {
    const existsInHTML = content.includes(`id="${id}"`) || content.includes(`id = '${id}'`) || content.includes(`id='${id}'`) || dynamicIds.has(id);
    assert(existsInHTML, `getElementById("${id}") matches an element in HTML or dynamically generated view`);
  }
});

// 4. Check that all 6 projects exist in PROJECTS_DATA
const requiredProjects = ['teamflow', 'isl-translator', 'onehealth-ai', 'mykitchen', 'ai-email-summarizer', 'aws-attendance'];
requiredProjects.forEach(p => {
  assert(content.includes(`id: '${p}'`), `Project '${p}' exists in PROJECTS_DATA`);
});

// 5. Check that all 6 skill domains exist in SKILLS_DOMAINS
const requiredSkillDomains = ['ai-ml', 'vision', 'web-systems', 'databases', 'languages', 'testing-tools'];
requiredSkillDomains.forEach(d => {
  assert(content.includes(`id: '${d}'`), `Skill Domain '${d}' exists in SKILLS_DOMAINS`);
});

// 6. Check that both research initiatives exist in RESEARCH_DATA
const requiredResearch = ['indic-nlp', 'avian-ai'];
requiredResearch.forEach(r => {
  assert(content.includes(`id: '${r}'`), `Research initiative '${r}' exists in RESEARCH_DATA`);
});

// 7. Check external documents and contacts
assert(content.includes('Kevin_Resume.pdf'), 'Resume link Kevin_Resume.pdf exists');
assert(content.includes('kevinprakashj@gmail.com'), 'Contact email kevinprakashj@gmail.com exists');
assert(content.includes('https://github.com/KevinLegend13'), 'GitHub link exists');
assert(content.includes('https://linkedin.com/in/kevin-prakash-j'), 'LinkedIn link exists');

console.log(`\nValidation Complete: ${passCount} Passed, ${failCount} Failed.`);
process.exit(failCount > 0 ? 1 : 0);

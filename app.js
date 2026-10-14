// Set the business's confirmed main WhatsApp here to bypass the contact chooser.
const MAIN_WHATSAPP = '';
const contacts = [
  [
    "Anne Azevedo - Portas, Janelas e Madeiras",
    "5585992686735"
  ],
  [
    "Elane",
    "5585992225908"
  ],
  [
    "Gladson",
    "5585989566602"
  ],
  [
    "Letícia",
    "5585991533481"
  ],
  [
    "Márcio",
    "5585999851702"
  ],
  [
    "Natália",
    "5585991854377"
  ],
  [
    "Rosângela - Portas, Janelas e Madeiras",
    "5585989026882"
  ],
  [
    "Sheila - Portas, Janelas e Madeiras",
    "5585992328481"
  ],
  [
    "Simones",
    "5585989566502"
  ],
  [
    "Valter",
    "5585996760654"
  ],
  [
    "Jessica",
    "5585991195743"
  ],
  [
    "Janaina",
    "5585991555310"
  ],
  [
    "Ravena",
    "5585991070659"
  ],
  [
    "Adriana",
    "5585989020696"
  ],
  [
    "Alane",
    "5585989020698"
  ],
  [
    "Antônio",
    "5585989566600"
  ],
  [
    "Bruna",
    "5585991552163"
  ],
  [
    "Kamila",
    "5585989566601"
  ],
  [
    "Kelly",
    "5585989566501"
  ],
  [
    "Larissa",
    "5585989566327"
  ],
  [
    "Lyan",
    "5585991994467"
  ],
  [
    "Leonice",
    "5585994397018"
  ],
  [
    "Nivia - Portas, Janelas e Madeiras",
    "5585989690870"
  ],
  [
    "Ramiro",
    "5585992191022"
  ],
  [
    "Socorro",
    "5585989566499"
  ]
];
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#nav');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');nav.classList.toggle('open',open)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu')}});
const dialog=document.querySelector('#contact-dialog'),select=document.querySelector('#attendant'),chat=document.querySelector('#start-chat');
const sulGroup=document.createElement('optgroup');sulGroup.label='Atendimento Itaipu Sul';sulGroup.className='contact-group-sul';const matrizGroup=document.createElement('optgroup');matrizGroup.label='Atendimento Itaipu Matriz';matrizGroup.className='contact-group-matriz';contacts.forEach(([name,number],index)=>{const opt=document.createElement('option');opt.textContent=name;opt.value=number;(index<10?sulGroup:matrizGroup).append(opt)});select.append(sulGroup,matrizGroup)
let topic='atendimento';
const url=number=>`https://wa.me/${number}?text=${encodeURIComponent(topic==='atendimento'?'Olá! Vim pelo site da Madeireira Itaipu e gostaria de um atendimento.':`Olá! Vim pelo site da Madeireira Itaipu e gostaria de informações e orçamento para ${topic}.`)}`;
function sync(){if(select.value){chat.href=url(select.value);chat.removeAttribute('aria-disabled');chat.tabIndex=0}else{chat.removeAttribute('href');chat.setAttribute('aria-disabled','true');chat.tabIndex=-1}}
document.querySelectorAll('[data-whatsapp]').forEach(el=>el.addEventListener('click',()=>{topic=el.dataset.whatsapp;if(MAIN_WHATSAPP){window.open(url(MAIN_WHATSAPP),'_blank','noopener');return}sync();dialog.showModal()}));
select.addEventListener('change',sync);dialog.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});sync();

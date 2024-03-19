"显示行号
set nu

"我的状态行显示的内容
set statusline=%F%m%r%h%w\[LINE=%l,%v][%p%%]\%{strftime(\"%d/%m/%y\ -\ %H:%M\")}
"启动时隐去援助提示
set shortmess=atI

"语法高亮
syntax on
"使用vim的键盘模式
set nocompatible
"不需要备份
set nobackup
"没有保存或文件只读时弹出确认
set confirm
"鼠标可用
set mouse=a

"tab缩进
set tabstop=2
set shiftwidth=2
set expandtab
set smarttab
"文件自动检测外部更改
set autoread
"c文件自动缩进
set cindent
"自动对齐
set autoindent
"智能缩进
set smartindent
"高亮查找匹配
set hlsearch
"显示匹配
set showmatch
"显示标尺，就是在右下角显示光标位置
set ruler
"去除vi的一致性
set nocompatible
"设置键盘映射，通过空格设置折叠
nnoremap <S-z>  <Esc>:bot term ++rows=14<CR>
""""""""""""""""""""""""""""""""""""""""""""""
"不要闪烁
set novisualbell
"启动显示状态行
set laststatus=2
"浅色显示当前行
autocmd InsertLeave * se nocul
set cursorline
"用浅色高亮当前行
autocmd InsertEnter * se cul

"显示输入的命令
set showcmd

"被分割窗口之间显示空白
set fillchars=vert:/
set fillchars=stl:/
set fillchars=stlnc:/

" vundle 环境设置
filetype off
set rtp+=~/.vim/bundle/Vundle.vim
" vundle 管理的插件列表必须位于 vundle#begin() 和 vundle#end() 之间
call vundle#begin()
Plugin 'scrooloose/nerdtree'
Plugin 'vim-session'
Plugin 'vim-misc'
Plugin 'VundleVim/Vundle.vim'
Plugin 'altercation/vim-colors-solarized'
Plugin 'tomasr/molokai'
Plugin 'vim-scripts/phd'
Plugin 'Lokaltog/vim-powerline'
Plugin 'octol/vim-cpp-enhanced-highlight'
Plugin 'Raimondi/delimitMate'
" 插件列表结束
call vundle#end()
filetype plugin indent on

set background=dark
colorscheme molokai
"colorscheme molokai
"colorscheme phd
" 禁止显示菜单和工具条
set guioptions-=m
set guioptions-=T
" 总是显示状态栏
set laststatus=2

"禁止折行
set nowrap

" 设置状态栏主题风格
let g:Powerline_colorscheme='solarized256'
syntax keyword cppSTLtype initializer_list
" 基于缩进或语法进行代码折叠
"set foldmethod=indent
set foldmethod=syntax
" 启动 vim 时关闭折叠代码
set nofoldenable
"允许用退格键删除字符
set backspace=indent,eol,start
"编码设置
set encoding=utf-8
"共享剪切板
set clipboard=unnamed

let g:session_autoload = 'yes'
let g:session_autosave = 'yes'

" 替代 esc
inoremap jj <Esc>`^
map nn <Esc>$
map bb <Esc>0
map <C-f> :NERDTree<CR>
map <C-g> :NERDTreeToggle<CR>
let g:NERDTreeWinSize = 25 
let g:NERDTreeDirArrowExpandable = '▸'
let g:NERDTreeDirArrowCollapsible = '▾'
let NERDTreeIgnore = ['.pyc$'] 
let g:NERDTreeShowLineNumbers=1 
let g:NERDTreeHidden=0 
let NERDTreeMinimalUI = 1
let NERDTreeDirArrows = 1

set guifont=Monospace17
set guifont=Monaco:h17

set vb
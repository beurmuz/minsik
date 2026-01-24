// Todo App 구현 (함수형 컴포넌트)
const TodoApp = () => {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let currentFilter = "all";

  // HTML 생성
  const createHTML = () => {
    const body = document.body;

    // 기존 HTML이 있다면 제거
    const existingApp = document.getElementById("todoApp");
    if (existingApp) {
      existingApp.remove();
    }

    const appHTML = `
      <div id="todoApp" class="todo-app">
        <div class="todo-container">
          <h1 class="todo-title">📝 Todo App</h1>
          
          <div class="todo-input-section">
            <input 
              type="text" 
              id="todoInput" 
              class="todo-input" 
              placeholder="할 일을 입력하세요..."
              maxlength="100"
            >
            <button id="addTodoBtn" class="add-btn">추가</button>
          </div>

          <div class="todo-filters">
            <button class="filter-btn active" data-filter="all">전체</button>
            <button class="filter-btn" data-filter="active">진행중</button>
            <button class="filter-btn" data-filter="completed">완료</button>
          </div>

          <ul id="todoList" class="todo-list"></ul>
          
          <div class="todo-stats">
            <span id="todoCount">총 0개</span>
            <button id="clearCompleted" class="clear-btn">완료된 항목 삭제</button>
          </div>
        </div>
      </div>
    `;

    body.insertAdjacentHTML("beforeend", appHTML);
    addStyles();
  };

  // 스타일 추가
  const addStyles = () => {
    const style = document.createElement("style");
    style.textContent = `
      .todo-app {
        font-family: 'Arial', sans-serif;
        max-width: 600px;
        margin: 50px auto;
        padding: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .todo-container {
        background: white;
        border-radius: 15px;
        padding: 30px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        width: 100%;
        max-width: 500px;
      }

      .todo-title {
        text-align: center;
        color: #333;
        margin-bottom: 30px;
        font-size: 2.5em;
        font-weight: bold;
      }

      .todo-input-section {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
      }

      .todo-input {
        flex: 1;
        padding: 15px;
        border: 2px solid #e1e5e9;
        border-radius: 10px;
        font-size: 16px;
        transition: border-color 0.3s ease;
      }

      .todo-input:focus {
        outline: none;
        border-color: #667eea;
      }

      .add-btn {
        padding: 15px 25px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: transform 0.2s ease;
      }

      .add-btn:hover {
        transform: translateY(-2px);
      }

      .todo-filters {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
        justify-content: center;
      }

      .filter-btn {
        padding: 8px 16px;
        border: 2px solid #e1e5e9;
        background: white;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .filter-btn.active,
      .filter-btn:hover {
        background: #667eea;
        color: white;
        border-color: #667eea;
      }

      .todo-list {
        list-style: none;
        padding: 0;
        margin: 0;
        max-height: 400px;
        overflow-y: auto;
      }

      .todo-item {
        display: flex;
        align-items: center;
        padding: 15px;
        margin-bottom: 10px;
        background: #f8f9fa;
        border-radius: 10px;
        transition: all 0.3s ease;
        animation: slideIn 0.3s ease;
      }

      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .todo-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      }

      .todo-item.completed {
        opacity: 0.6;
        background: #e8f5e8;
      }

      .todo-item.completed .todo-text {
        text-decoration: line-through;
        color: #666;
      }

      .todo-checkbox {
        margin-right: 15px;
        width: 20px;
        height: 20px;
        cursor: pointer;
      }

      .todo-text {
        flex: 1;
        font-size: 16px;
        color: #333;
      }

      .todo-actions {
        display: flex;
        gap: 5px;
      }

      .edit-btn,
      .delete-btn {
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 12px;
        transition: all 0.2s ease;
      }

      .edit-btn {
        background: #ffc107;
        color: #333;
      }

      .edit-btn:hover {
        background: #e0a800;
      }

      .delete-btn {
        background: #dc3545;
        color: white;
      }

      .delete-btn:hover {
        background: #c82333;
      }

      .todo-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 2px solid #e1e5e9;
      }

      .clear-btn {
        padding: 8px 16px;
        background: #6c757d;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        transition: background 0.3s ease;
      }

      .clear-btn:hover {
        background: #5a6268;
      }

      .todo-input.edit-mode {
        background: #fff3cd;
        border-color: #ffc107;
      }
    `;
    document.head.appendChild(style);
  };

  // 이벤트 바인딩
  const bindEvents = () => {
    const todoInput = document.getElementById("todoInput");
    const addTodoBtn = document.getElementById("addTodoBtn");
    const todoList = document.getElementById("todoList");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const clearCompletedBtn = document.getElementById("clearCompleted");

    // Enter 키로 추가
    todoInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTodo();
      }
    });

    // 추가 버튼 클릭
    addTodoBtn.addEventListener("click", () => {
      addTodo();
    });

    // 필터 버튼들
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        e.target.classList.add("active");
        currentFilter = e.target.dataset.filter;
        filterTodos();
      });
    });

    // 완료된 항목 삭제
    clearCompletedBtn.addEventListener("click", () => {
      clearCompleted();
    });

    // Todo 리스트 이벤트 위임
    todoList.addEventListener("click", (e) => {
      const todoItem = e.target.closest(".todo-item");
      if (!todoItem) return;

      const todoId = parseInt(todoItem.dataset.id);

      if (e.target.classList.contains("todo-checkbox")) {
        toggleTodo(todoId);
      } else if (e.target.classList.contains("edit-btn")) {
        editTodo(todoItem, todoId);
      } else if (e.target.classList.contains("delete-btn")) {
        deleteTodo(todoId);
      }
    });
  };

  // 할 일 추가
  const addTodo = () => {
    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value.trim();

    if (!todoText) {
      showNotification("할 일을 입력해주세요!", "warning");
      return;
    }

    const todo = {
      id: Date.now(),
      text: todoText,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    todos.push(todo);
    saveTodos();
    renderTodos();
    todoInput.value = "";
    todoInput.focus();

    showNotification("할 일이 추가되었습니다!", "success");
  };

  // 할 일 토글
  const toggleTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      saveTodos();
      renderTodos();
    }
  };

  // 할 일 수정
  const editTodo = (todoItem, id) => {
    const todoText = todoItem.querySelector(".todo-text");
    const currentText = todoText.textContent;

    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;
    input.className = "todo-input edit-mode";

    const saveEdit = () => {
      const newText = input.value.trim();
      if (newText && newText !== currentText) {
        const todo = todos.find((t) => t.id === id);
        if (todo) {
          todo.text = newText;
          saveTodos();
          renderTodos();
          showNotification("할 일이 수정되었습니다!", "success");
        }
      } else if (!newText) {
        showNotification("할 일을 입력해주세요!", "warning");
      }
    };

    input.addEventListener("blur", saveEdit);
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        saveEdit();
      }
    });

    todoText.replaceWith(input);
    input.focus();
    input.select();
  };

  // 할 일 삭제
  const deleteTodo = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      todos = todos.filter((t) => t.id !== id);
      saveTodos();
      renderTodos();
      showNotification("할 일이 삭제되었습니다!", "info");
    }
  };

  // 완료된 항목 삭제
  const clearCompleted = () => {
    const completedCount = todos.filter((t) => t.completed).length;
    if (completedCount === 0) {
      showNotification("완료된 할 일이 없습니다!", "warning");
      return;
    }

    if (
      window.confirm(`완료된 ${completedCount}개의 할 일을 삭제하시겠습니까?`)
    ) {
      todos = todos.filter((t) => !t.completed);
      saveTodos();
      renderTodos();
      showNotification(
        `${completedCount}개의 완료된 할 일이 삭제되었습니다!`,
        "info"
      );
    }
  };

  // 할 일 필터링
  const filterTodos = () => {
    const todoItems = document.querySelectorAll(".todo-item");
    todoItems.forEach((item) => {
      const isCompleted = item.classList.contains("completed");

      switch (currentFilter) {
        case "active":
          item.style.display = isCompleted ? "none" : "flex";
          break;
        case "completed":
          item.style.display = isCompleted ? "flex" : "none";
          break;
        default:
          item.style.display = "flex";
      }
    });
  };

  // 할 일 렌더링
  const renderTodos = () => {
    const todoList = document.getElementById("todoList");
    const todoCount = document.getElementById("todoCount");

    todoList.innerHTML = "";

    if (todos.length === 0) {
      todoList.innerHTML =
        '<li class="todo-item" style="text-align: center; color: #666;">할 일이 없습니다. 새로운 할 일을 추가해보세요!</li>';
      todoCount.textContent = "총 0개";
      return;
    }

    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.className = `todo-item ${todo.completed ? "completed" : ""}`;
      li.dataset.id = todo.id;

      li.innerHTML = `
        <input type="checkbox" class="todo-checkbox" ${
          todo.completed ? "checked" : ""
        }>
        <span class="todo-text">${escapeHtml(todo.text)}</span>
        <div class="todo-actions">
          <button class="edit-btn">수정</button>
          <button class="delete-btn">삭제</button>
        </div>
      `;

      todoList.appendChild(li);
    });

    const totalCount = todos.length;
    const completedCount = todos.filter((t) => t.completed).length;
    todoCount.textContent = `총 ${totalCount}개 (완료: ${completedCount}개)`;
  };

  // 데이터 저장
  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // HTML 이스케이프
  const escapeHtml = (text) => {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  };

  // 알림 표시
  const showNotification = (message, type = "info") => {
    const notification = document.createElement("div");
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 20px;
      border-radius: 5px;
      color: white;
      font-weight: bold;
      z-index: 1000;
      animation: slideInRight 0.3s ease;
    `;

    switch (type) {
      case "success":
        notification.style.background = "#28a745";
        break;
      case "warning":
        notification.style.background = "#ffc107";
        notification.style.color = "#333";
        break;
      case "error":
        notification.style.background = "#dc3545";
        break;
      default:
        notification.style.background = "#17a2b8";
    }

    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = "slideOutRight 0.3s ease";
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  };

  // 초기화
  const init = () => {
    createHTML();
    bindEvents();
    renderTodos();
  };

  // 앱 시작
  init();
};

// Todo App 실행
TodoApp();

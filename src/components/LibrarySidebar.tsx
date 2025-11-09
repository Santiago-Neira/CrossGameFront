import { useState } from "react";
import { Plus, Pencil, Trash2, MoreVertical } from "lucide-react";
import { GameList } from "./library-data";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog";
import { Label } from "./ui/label";

interface LibrarySidebarProps {
  lists: GameList[];
  selectedListId: string;
  onSelectList: (listId: string) => void;
  onCreateList: (name: string) => void;
  onRenameList: (listId: string, newName: string) => void;
  onDeleteList: (listId: string) => void;
}

export function LibrarySidebar({
  lists,
  selectedListId,
  onSelectList,
  onCreateList,
  onRenameList,
  onDeleteList,
}: LibrarySidebarProps) {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isRenameDialogOpen, setIsRenameDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [newListName, setNewListName] = useState("");
  const [renameListId, setRenameListId] = useState("");
  const [renameListName, setRenameListName] = useState("");
  const [deleteListId, setDeleteListId] = useState("");

  const handleCreateList = () => {
    if (newListName.trim()) {
      onCreateList(newListName.trim());
      setNewListName("");
      setIsCreateDialogOpen(false);
    }
  };

  const handleRenameList = () => {
    if (renameListName.trim()) {
      onRenameList(renameListId, renameListName.trim());
      setRenameListId("");
      setRenameListName("");
      setIsRenameDialogOpen(false);
    }
  };

  const handleDeleteList = () => {
    onDeleteList(deleteListId);
    setDeleteListId("");
    setIsDeleteDialogOpen(false);
  };

  const openRenameDialog = (list: GameList) => {
    setRenameListId(list.id);
    setRenameListName(list.name);
    setIsRenameDialogOpen(true);
  };

  const openDeleteDialog = (listId: string) => {
    setDeleteListId(listId);
    setIsDeleteDialogOpen(true);
  };

  return (
    <aside className="w-64 bg-[#0f1218] border-r border-[#1e293b] p-4 flex flex-col">
      {/* Lists Section */}
      <div className="flex-1 space-y-1">
        <h3 className="px-3 py-2 text-xs tracking-wider text-muted-foreground">
          COLECCIONES
        </h3>

        {lists.map((list) => (
          <div
            key={list.id}
            className="group relative"
          >
            <button
              onClick={() => onSelectList(list.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-colors ${
                selectedListId === list.id
                  ? "bg-blue-600 text-white"
                  : "text-foreground hover:bg-[#1a1f2e] hover:text-white"
              }`}
            >
              <span className="truncate">{list.name}</span>
              
              {!list.isDefault && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className={`opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-white/10 ${
                        selectedListId === list.id ? "opacity-100" : ""
                      }`}
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-[#1a1f2e] border-[#2a2d34]">
                    <DropdownMenuItem
                      onClick={() => openRenameDialog(list)}
                      className="text-foreground hover:bg-[#2a2d34] hover:text-white cursor-pointer"
                    >
                      <Pencil className="w-4 h-4 mr-2" />
                      Renombrar
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => openDeleteDialog(list.id)}
                      className="text-destructive hover:bg-destructive/10 hover:text-destructive cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Eliminar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Create New List Button */}
      <Button
        onClick={() => setIsCreateDialogOpen(true)}
        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
      >
        <Plus className="w-4 h-4 mr-2" />
        Crear Nueva Lista
      </Button>

      {/* Create List Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="bg-[#1a1d24] border-[#2a2d34]">
          <DialogHeader>
            <DialogTitle className="text-white">Crear Nueva Lista</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="list-name" className="text-foreground">
                Nombre de la Lista
              </Label>
              <Input
                id="list-name"
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
                placeholder="Ej. Juegos por Comprar"
                className="bg-[#2A2D34] border-[#2A2D34] text-white focus-visible:ring-blue-600"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCreateList();
                  }
                }}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="ghost"
              onClick={() => setIsCreateDialogOpen(false)}
              className="text-foreground hover:bg-[#2a2d34]"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleCreateList}
              className="bg-blue-600 hover:bg-blue-700 text-white"
              disabled={!newListName.trim()}
            >
              Crear
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Rename List Dialog */}
      <Dialog open={isRenameDialogOpen} onOpenChange={setIsRenameDialogOpen}>
        <DialogContent className="bg-[#1a1d24] border-[#2a2d34]">
          <DialogHeader>
            <DialogTitle className="text-white">Renombrar Lista</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="rename-list" className="text-foreground">
                Nuevo Nombre
              </Label>
              <Input
                id="rename-list"
                value={renameListName}
                onChange={(e) => setRenameListName(e.target.value)}
                className="bg-[#2A2D34] border-[#2A2D34] text-white focus-visible:ring-blue-600"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleRenameList();
                  }
                }}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="ghost"
              onClick={() => setIsRenameDialogOpen(false)}
              className="text-foreground hover:bg-[#2a2d34]"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleRenameList}
              className="bg-blue-600 hover:bg-blue-700 text-white"
              disabled={!renameListName.trim()}
            >
              Guardar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete List Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent className="bg-[#1a1d24] border-[#2a2d34]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">¿Eliminar lista?</AlertDialogTitle>
            <AlertDialogDescription className="text-muted-foreground">
              Esta acción no se puede deshacer. La lista será eliminada permanentemente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-transparent border-[#2a2d34] text-foreground hover:bg-[#2a2d34]">
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteList}
              className="bg-destructive hover:bg-destructive/90 text-white"
            >
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </aside>
  );
}

class Api::V1::NotesController < ApplicationController
  def index
    notes = Note.all()
    render json:notes, status: 200
  end

  def new
    note = Note.new
  end

  def create
    note = Note.new(title: note_params[:title], body: note_params[:body], author: note_params[:author], date:note_params[:date], image:note_params[:image], collection:note_params[:collection])
    if note.save
      render json:note, status: 200
    else
      render json: {error: "creating error..."}
    end
  end

  def show
    note = Note.find_by(id:params[:id])
    if note
      render json:note, status: 200
    else
      render json: {error: "Note not found!"}
    end
  end

  def update
    note = Note.find(params[:id])

    if note
      note.update(title: params[:title], body: params[:body], author: params[:author], date:params[:date], image:params[:image], collection:params[:collection])
      render json: "Note updated successfully"
    else
      render json:{ error: "Note not found"}
    end
  end

  

  def destroy
    note = Note.find(params[:id])
    if note
      note.destroy
      render json: "Note deleted successfully"
    end
  end

  private
    def note_params
      params.require(:note).permit(:title, :body, :author, :date, :image, :collection)
    end
end

class Api::V3::NotesusersController < ApplicationController
  def index
    notesusers = NoteUser.all()
    render json:notesusers, status: 200
  end

  def new
    noteuser = NoteUser.new
  end

  def create
    noteuser = NoteUser.new(noteid: user_params[:noteid], useremail: user_params[:useremail])
    if noteuser.save
      render json:noteuser, status: 200
    else
      render json: {error: "creating error..."}
    end
  end

  def show
    noteuser = NoteUser.find_by(id:params[:id])
    if noteuser
      render json:noteuser, status: 200
    else
      render json: {error: "NoteUser not found!"}
    end
  end



  def update
    noteuser = NoteUser.find(params[:id])

    if noteuser
      noteuser.update(noteid: params[:noteid], useremail: params[:useremail])
      render json: "NoteUser updated successfully"
    else
      render json:{ error: "NoteUser not found"}
    end
  end

  

  def destroy
    noteuser = NoteUser.find(params[:id])
    if noteuser
      noteuser.destroy
      render json: "NoteUser deleted successfully"
    end
  end

  private
    def user_params
      params.require(:notesuser).permit(:noteid, :useremail)
    end
end
